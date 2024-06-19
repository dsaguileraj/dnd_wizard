from rest_framework import permissions, viewsets
from . import models
from . import serializers


class AdventureGearViewSet(viewsets.ModelViewSet):
    queryset = models.AdventureGear.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.AdventureGearSerializer


class ArmorViewSet(viewsets.ModelViewSet):
    queryset = models.Armor.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ArmorSerializer


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = models.Property.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.PropertySerializer


class SpellViewSet(viewsets.ModelViewSet):
    queryset = models.Spell.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.SpellSerializer


class ToolViewSet(viewsets.ModelViewSet):
    queryset = models.Tool.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ToolSerializer


class TrinketViewSet(viewsets.ModelViewSet):
    queryset = models.Trinket.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.TrinketSerializer


class WeaponViewSet(viewsets.ModelViewSet):
    queryset = models.Weapon.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.WeaponSerializer
