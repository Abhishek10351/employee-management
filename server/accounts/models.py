from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, null=True, blank=True)

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
