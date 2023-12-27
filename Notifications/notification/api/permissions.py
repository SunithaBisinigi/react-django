# permissions.py
from rest_framework import permissions

class CanUpdateApproval(permissions.BasePermission):
    def has_permission(self, request, view):
        # Check if the user has the necessary permissions
        # You can customize this logic based on your requirements
        return request.user.is_authenticated and request.user.is_staff
