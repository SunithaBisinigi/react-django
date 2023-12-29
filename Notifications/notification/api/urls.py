from django.urls import path
from .views import ApprovalListView, UpdateApprovalView, register_user, user_login,get_csrf_token,create_user_profile,get_approval_status

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', user_login, name='user_login'),
    path('create/', create_user_profile, name='create-userprofile'),
    path('api/userprofiles/aprovallist/', ApprovalListView.as_view(), name='aprovallist'),
    path('api/userprofiles/update_approval/<int:pk>/', UpdateApprovalView.as_view(), name='update-approval'),
    path('get-csrf-token/', get_csrf_token, name='get_csrf_token'),
    path('api/get_approval_status/<int:user_id>/', get_approval_status, name='get_approval_status'),
]

