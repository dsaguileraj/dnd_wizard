from rest_framework import permissions, viewsets
from . import models
from . import serializers


class WeaponViewSet(viewsets.ModelViewSet):
    queryset = models.Weapon.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.WeaponSerializer
