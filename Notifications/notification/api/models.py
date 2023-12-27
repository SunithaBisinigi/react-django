# # models.py
# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

# class CustomUserManager(BaseUserManager):
#     def create_user(self, name, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('The Email field must be set')
#         email = self.normalize_email(email)
#         user = self.model(name=name, email=email, **extra_fields)
#         user.set_password(password)
#         user.save(using=self._db)
#         return user

#     def create_superuser(self, name, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)
#         return self.create_user(name, email, password, **extra_fields)

# class CustomUser(AbstractBaseUser):
#     name = models.CharField(max_length=255)
#     email = models.EmailField(unique=True)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     objects = CustomUserManager()

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['name']

#     def __str__(self):
#         return self.email
    


# ####################### USER PROFILE MODEL ##########################################

# class UserProfile(models.Model):
#     user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
#     qualifications = models.TextField(blank=True, null=True)
#     skills = models.TextField(blank=True, null=True)
#     languages = models.TextField(blank=True, null=True)
#     address = models.TextField(blank=True, null=True)
#     approval = models.CharField(max_length=1, default='p')  # Using CharField with default 'p'

#     def __str__(self):
#         return f"{self.user.email}'s Profile"


# models.py
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, name, email, password=None, approval='p', **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(name=name, email=email, approval=approval, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, name, email, password=None, approval='p', **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(name, email, password, approval, **extra_fields)

class CustomUser(AbstractBaseUser):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    approval = models.CharField(max_length=1, default='p')  # Add the approval field here

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email

class UserProfile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='profile')
    qualifications = models.CharField(max_length=100, blank=True, null=True)
    skills = models.CharField(max_length=100, blank=True, null=True)
    languages = models.CharField(max_length=100, blank=True, null=True)


    def __str__(self):
        return f"{self.user.email}'s Profile"

