from rest_framework import viewsets, routers
from .models import Employee
from .serializers import EmployeeSerializer
# Create your views here.


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    # permission_classes = [permissions.IsAuthenticated]

router = routers.DefaultRouter()
router.register(r"employees", EmployeeViewSet)