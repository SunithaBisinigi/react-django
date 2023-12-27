from django.db import models

# Create your models here.
class YourUserModel(models.Model):
    ID = models.IntegerField(primary_key=True)
    FirstName = models.CharField(max_length=255)
    LastName = models.CharField(max_length=255)
    Prefix = models.CharField(max_length=10)
    Position = models.CharField(max_length=255)
    Picture = models.ImageField(upload_to='employee_pictures/')
    BirthDate = models.DateField()
    HireDate = models.DateField()
    Notes = models.TextField()
    Address = models.CharField(max_length=255)