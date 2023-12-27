from rest_framework import serializers
from .models import UserProfile, CustomUser
from django.contrib.auth import authenticate

class UserProfileSerializer(serializers.ModelSerializer):
    userId = serializers.IntegerField(source='user.id', read_only=True)
    userName = serializers.CharField(source='user.name', read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'userId', 'userName', 'qualifications', 'skills', 'languages']
# serializers.py
from rest_framework import serializers
from .models import CustomUser

class RegistrationSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ('id', 'name', 'email', 'password', 'confirm_password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        confirm_password = validated_data.pop('confirm_password', None)
        if validated_data['password'] != confirm_password:
            raise serializers.ValidationError({'password': 'Passwords do not match'})
        
        user = CustomUser.objects.create_user(**validated_data)
        return user

# serializers.py
from rest_framework import serializers
from django.contrib.auth import authenticate

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'), email=email, password=password)

            if not user:
                msg = 'Unable to log in with provided credentials.'
                raise serializers.ValidationError(msg, code='authorization')

        else:
            msg = 'Must include "email" and "password".'
            raise serializers.ValidationError(msg, code='authorization')

        data['user'] = user
        return data
