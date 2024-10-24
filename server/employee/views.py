from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework import viewsets, routers, permissions, serializers
from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if isinstance(self.request.user, AnonymousUser):
            return Employee.objects.none()
        else:

            return Employee.objects.filter(user=self.request.user)
        



router = routers.DefaultRouter()
router.register("", EmployeeViewSet)