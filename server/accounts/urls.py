from django.urls import path, include

from .views import router
from .views import CreateUserView, UserView

urlpatterns = [
    path("create/", CreateUserView.as_view(), name="create_user"),
    path("me/", UserView.as_view(), name="user"),
    path("", include(router.urls)),
]
