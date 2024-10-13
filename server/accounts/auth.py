from rest_framework_simplejwt.authentication import JWTAuthentication


class JWTAuthenticationCookie(JWTAuthentication):
    def authenticate(self, request):
        raw_token = self.get_cookie(request, "access")
        if raw_token is None:
            return None
        validated_token = self.get_validated_token(raw_token)
        user = self.get_user(validated_token)
        return user, validated_token

    def get_cookie(self, request, name):
        raw_token = request.COOKIES.get(name)
        if not raw_token:
            return None
        return raw_token
