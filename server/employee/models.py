from django.db import models
from django.utils import timezone
from departments.models import Department
from accounts.models import User


def validate_hire_date(value):
    if value > timezone.now().date():
        raise ValidationError("The hire date cannot be in the future.")


class Employee(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    position = models.CharField(max_length=100)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    hire_date = models.DateField(validators=[validate_hire_date])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True)

    def __str__(self):
        return f"{self.name} - {self.department} - {self.position}"
