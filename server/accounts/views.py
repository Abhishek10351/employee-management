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

from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            data = serializer.data
            user = User.objects.create_user(**data)
            headers = self.get_success_headers(serializer.data)
            return Response(UserSerializer(user).data, status=201, headers=headers)

        return Response(serializer.errors, status=400)


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
            data = serializer.data
            username = data.get("username", None)
            User.objects.create_user(username=username, **data)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=201, headers=headers)
        return Response(serializer.errors, status=400)


class UserView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = PageNumberPagination

    def get_queryset(self, *args, **kwargs):
        return UserSerializer(self.request.user).data

    def get(self, request, *args, **kwargs):
        data = UserSerializer(self.request.user).data
        data.pop("password")
        return JsonResponse(data)


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
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="access",
            value=response.data["access"],
            max_age=timedelta(days=5),
        )
        response.data = {"message": "success"}
        return response
