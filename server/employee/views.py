from .models import Employee
from .serializers import EmployeeSerializer
from rest_framework import viewsets, routers, permissions, serializers
from rest_framework.response import Response
from django.contrib.auth.models import AnonymousUser


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [permissions.IsAuthenticated]

    def create(self, request, *args, **kwargs):
        data = request.data
        # data.user = request.user
        if isinstance(request.user, AnonymousUser):
            raise serializers.ValidationError(
                "You must be logged in to perform this action."
            )
        else:
            data.user = request.user

        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    def update(self, request, *args, **kwargs):
        data = request.data
        if isinstance(request.user, AnonymousUser):
            raise serializers.ValidationError(
                "You must be logged in to perform this action."
            )
        else:
            data.user = request.user.id

        instance = self.get_object()
        serializer = self.get_serializer(instance, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)
    
    def get_queryset(self):
        if isinstance(self.request.user, AnonymousUser):
            return Employee.objects.none()
        else:

            return Employee.objects.filter(user=self.request.user)
        



router = routers.DefaultRouter()
router.register("", EmployeeViewSet)
