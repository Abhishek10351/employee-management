from django.db import models


# Create your models here.
class Department(models.Model):
    dept_id = models.CharField(max_length=10, primary_key=True)
    dept_name = models.CharField(max_length=100)

    def __str__(self):
        return self.dept_name
