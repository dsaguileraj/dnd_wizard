from rest_framework import serializers
from . import models


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Weapon
        fields = "__all__"
