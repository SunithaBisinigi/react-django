from rest_framework import serializers
from .models import  YourUserModel

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = YourUserModel  # Replace with your actual user model
        fields = '__all__'