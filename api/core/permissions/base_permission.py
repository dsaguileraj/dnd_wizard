from rest_framework import permissions, serializers, viewsets


class BasePermissionView(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
