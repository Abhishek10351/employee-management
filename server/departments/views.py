from rest_framework import viewsets
from .models import Department
from .serializers import DepartmentSerializer
from rest_framework import routers
from rest_framework.permissions import IsAuthenticated, AllowAny

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer



router = routers.DefaultRouter()
router.register(r"departments", DepartmentViewSet)
