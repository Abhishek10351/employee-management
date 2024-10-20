from rest_framework import viewsets, routers
from .models import Employee
from .serializers import EmployeeSerializer
from django.utils import timezone


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    # permission_classes = [permissions.IsAuthenticated]

    def update(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            Emp = Employee.objects.update(**serializer.validated_data)
            Emp.updated_at = timezone.now()
            Emp.save()
            return JsonResponse(EmployeeSerializer(Emp).data, status=201)


router = routers.DefaultRouter()
router.register("", EmployeeViewSet)
