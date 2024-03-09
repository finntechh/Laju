from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Mitlgieder(models.Model):
    benutzer = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    vorname = models.CharField(max_length=50)
    nachname = models.CharField(max_length=50)