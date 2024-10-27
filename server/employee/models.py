from django.db import models
from django.utils import timezone
from accounts.models import User
from django.core.exceptions import ValidationError


def validate_hire_date(value):
    if value > timezone.now().date():
        raise ValidationError("The hire date cannot be in the future.")


class Employee(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    department = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    salary = models.IntegerField()
    hire_date = models.DateField(validators=[validate_hire_date])

    def __str__(self):
        return f"{self.name}, Department:  {self.department}, Position: {self.position}"
