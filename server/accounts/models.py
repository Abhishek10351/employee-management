from django.db import models
from django.contrib.auth.models import AbstractUser


# class Role(models.Model):
#     name = models.CharField(max_length=255, unique=True)

#     def __str__(self):
#         return self.name


class User(AbstractUser):
    # role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True, blank=True)
    email = models.EmailField(unique=True)

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name"]
