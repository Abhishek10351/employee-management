from rest_framework import viewsets
from .models import Department
from .serializers import DepartmentSerializer
from rest_framework import routers


class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer
    pagination_class = None


router = routers.DefaultRouter()
router.register(r"", DepartmentViewSet)
