from django.db import models
from django.contrib.auth.models import AbstractUser
import  employee.models as emp_models


class User(AbstractUser):
    email = models.EmailField(unique=True)
    employee = models.OneToOneField(
        emp_models.Employee, on_delete=models.CASCADE, related_name="user", null=True, blank=True
    )

    EMAIL_FIELD = "email"
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name"]
