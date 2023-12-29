# views.py

from rest_framework import generics, mixins
from rest_framework_simplejwt.tokens import AccessToken
from .models import UserProfile, CustomUser
from .serializers import UserProfileSerializer, RegistrationSerializer, LoginSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from django.db.models import F
from django.shortcuts import get_object_or_404

################ THIS IS FOR THE FORM DATA creating....##################################
@api_view(['POST'])
def create_user_profile(request):
    user_id = request.data.get('userId')
    qualifications = request.data.get('qualifications')
    skills = request.data.get('skills')
    languages = request.data.get('languages')
    form_id = request.data.get('formId')  # Ensure you get formId from the request data

    # Check if the user exists
    try:
        user = CustomUser.objects.get(id=user_id)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found'}, status=404)

    # Check if the user has a profile
    user_profile, created = UserProfile.objects.get_or_create(user=user, form_id=form_id)

    # Update user profile data
    user_profile.qualifications = qualifications
    user_profile.skills = skills
    user_profile.languages = languages
    user_profile.save()

    # Serialize the updated user profile data
    serializer = UserProfileSerializer(user_profile)
    return Response(serializer.data, status=200)


############################# APPROVAL LIST FETCHING  FROM DB ########################################################

from django.db.models import Q

class ApprovalListView(mixins.ListModelMixin, generics.GenericAPIView):
    serializer_class = UserProfileSerializer

    def get_queryset(self):
        # Filter records where approval is 'p'
        queryset = UserProfile.objects.filter(approval='p')
        return queryset

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    
############################ UPDATING THE APPROVAL #####################################

class UpdateApprovalView(generics.UpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def update(self, request, *args, **kwargs):
        user_id = kwargs.get('user_id')
        form_id = kwargs.get('form_id')
        
        try:
            instance = UserProfile.objects.get(user__id=user_id, form_id=form_id)
        except UserProfile.DoesNotExist:
            return Response({'error': 'UserProfile not found.'}, status=status.HTTP_404_NOT_FOUND)

        new_approval = request.data.get('approval', None)
        remark = request.data.get('remark', None)

        if new_approval == 'p':
            instance.approval = new_approval
            instance.remark = None
            instance.save()
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)

        current_approval = instance.approval
        if current_approval == 'p' and new_approval in ['a', 'r']:
            instance.approval = new_approval
            instance.remark = remark
            instance.save()
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid approval update.'}, status=status.HTTP_400_BAD_REQUEST)

################### THIS CREDENTIALS OF USER ....... #########################################
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from django.views.decorators.http import require_POST

@api_view(['POST'])
def register_user(request):
    serializer = RegistrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'success': 'User registered successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def user_login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    print("email, password data-----", email, password)
    
    if email and password:
        user = authenticate(request, email=email, password=password)
        print("authenticated user or not ?", user)
        
        if user:
            login(request, user)
            access_token = AccessToken.for_user(user)
            
            # Serialize the user data
            user_data = {
                'id': user.id
            }

            # Include user data in the response
            return JsonResponse({'access_token': str(access_token), 'user': user_data, 'message': 'Login successful'})
    
    print(' LOGIN FAILED------')
    return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


############## authentication csrf ##########################
from django.http import JsonResponse
from django.middleware.csrf import get_token

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrf_token': csrf_token})


######################### APPROVAL VALUE FETCHING ############################
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import UserProfile

@csrf_exempt
def get_approval_status(request, user_id, form_id):
    try:
        user = UserProfile.objects.get(id=user_id, form_id=form_id)
        approval_status = user.approval
        remark = user.remark if user.remark is not None else None  # Include remark only when not null
        response_data = {'approval_status': approval_status, 'remark': remark}
        return JsonResponse(response_data)
    except UserProfile.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)
