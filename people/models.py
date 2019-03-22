from django.db import models

# Create your models here.
class person(models.Model):
    name = models.CharField(max_length = 100)
    username = models.CharField(max_length = 50)
    password = models.CharField(max_length = 50)