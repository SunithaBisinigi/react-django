from .models import YourUserModel
from .serializers import UserSerializer
from rest_framework.generics import ListCreateAPIView
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import json
from django.db import IntegrityError

@csrf_exempt
def SaveUserDetailsView(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_data = data.get('userDetails', {})
            
            # Validate data and handle errors
            if not user_data:
                raise ValueError('Invalid user details')

            # Replace with your actual user model and serializer
            YourUserModel.objects.create(**user_data)

            return JsonResponse({'message': 'User details saved successfully'})
        except ValueError as ve:
            return JsonResponse({'error': str(ve)}, status=400)
        except Exception as e:
            print("Error:", e)  # Add this line for debugging
            return JsonResponse({'error': 'Internal Server Error'}, status=500)
    return JsonResponse({'error': 'Invalid request method'}, status=400)


# class GetUserDetailsView(ListCreateAPIView):
#     queryset = YourUserModel.objects.all()  # Replace with your actual user model
#     serializer_class = UserSerializer
class GetUserDetailsView(ListCreateAPIView):
    queryset = YourUserModel.objects.all()  # Replace with your actual user model
    serializer_class = UserSerializer

    def list(self, request, *args, **kwargs):
        try:
            # Get the last user record
            last_user = YourUserModel.objects.last()

            # Serialize the last user record
            serializer = self.get_serializer(last_user)

            return JsonResponse(serializer.data)
        except Exception as e:
            print("Error:", e)  # Add this line for debugging
            return JsonResponse({'error': 'Internal Server Error'}, status=500)

    def create(self, request, *args, **kwargs):
        try:
            # Assuming the request body contains the user details
            user_data = request.data.get('userDetails', {})
            
            # Validate data and handle errors
            if not user_data:
                raise ValueError('Invalid user details')

            # Replace with your actual user model and serializer
            YourUserModel.objects.create(**user_data)

            return JsonResponse({'message': 'User details saved successfully'})
        except ValueError as ve:
            return JsonResponse({'error': str(ve)}, status=400)
        except Exception as e:
            print("Error:", e)  # Add this line for debugging
            return JsonResponse({'error': 'Internal Server Error'}, status=500)