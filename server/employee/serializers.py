from rest_framework import serializers

from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        # fields = '__all__'
        fields = ["name", "email", "department", "position", "salary", "hire_date"]
        read_only_fields = ["user"]
    
    def create(self, validated_data):
        user = self.context["request"].user
        employee = Employee.objects.create(user=user, **validated_data)
        return employee
    
    def update(self, instance, validated_data):
        user = self.context["request"].user
        if user.is_staff:
            return super().update(instance, validated_data)
        else:
            update_fields = ["salary", "hire_date"]
            for field in update_fields:
                if field in validated_data:
                    setattr(instance, field, validated_data[field])
            instance.save()
            return instance

