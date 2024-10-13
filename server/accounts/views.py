from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework import viewsets, routers, generics
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import UserSerializer
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            data = serializer.data

            return JsonResponse(data, status=201)
        return JsonResponse(serializer.errors, status=400)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        if self.request.user.is_staff:
            return User.objects.all()
        else:
            return User.objects.filter(id=self.request.user.id)


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
        from datetime import timedelta

        # set cookies instead of returning json
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="refresh",
            value=response.data["refresh"],
            samesite="None",
            max_age=timedelta(days=5),
            httponly=True,
        )
        response.set_cookie(
            key="access",
            value=response.data["access"],
            samesite="None",
            max_age=timedelta(days=5),
            httponly=True,
        )
        response.data = {"message": "success"}
        return response


class RefreshToken(TokenRefreshView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        from datetime import timedelta

        # set cookies instead of returning json
        response = super().post(request, *args, **kwargs)
        response.set_cookie(
            key="access",
            value=response.data["access"],
            samesite="None",
            max_age=timedelta(days=5),
        )
        response.data = {"message": "success"}
        return response
