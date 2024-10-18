from .models import User
from django.http import JsonResponse
from rest_framework import viewsets, routers, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from datetime import timedelta


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            data = serializer.data
            user = User.objects.create_user(**data)
            return JsonResponse(user, status=201)
        return JsonResponse(serializer.errors, status=400)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    # permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return User.objects.all()
        if self.request.user.is_staff:
            return User.objects.all()
        else:
            return User.objects.filter(id=self.request.user.id)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.create_user(**serializer.validated_data)
            return JsonResponse(UserSerializer(user).data, status=201)
        return JsonResponse(serializer.errors, status=400)


class UserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        return UserSerializer(self.request.user).data

    def get(self, request, *args, **kwargs):
        return JsonResponse(UserSerializer(self.request.user).data)


router = routers.DefaultRouter()
router.register(r"users", UserViewSet)


class CreateToken(TokenObtainPairView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):

        # set cookies instead of returning json
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="refresh",
            value=response.data["refresh"],
            max_age=timedelta(days=5),
        )
        response.set_cookie(
            key="access",
            value=response.data["access"],
            max_age=timedelta(weeks=6),
        )
        response.data = {"message": "success"}
        return response


class RefreshToken(TokenRefreshView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):

        # set cookies instead of returning json
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="access",
            value=response.data["access"],
            max_age=timedelta(days=5),
        )
        response.data = {"message": "success"}
        return response
