from django.urls import path
from .views import SaveUserDetailsView, GetUserDetailsView

urlpatterns = [
    path('save-user-details/', SaveUserDetailsView, name='save_user_details'),
     path('get-user-details/', GetUserDetailsView.as_view(), name='get_user_details'),
]