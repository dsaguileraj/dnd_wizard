from rest_framework import permissions, viewsets
from .models import AdventurerEquipment, Armor, Property, Spell, Tool, Weapon
from .serializers import AdventurerEquipmentSerializer, ArmorSerializer, PropertySerializer, SpellSerializer, ToolSerializer, WeaponSerializer


class AdventurerEquipmentViewSet(viewsets.ModelViewSet):
    queryset = AdventurerEquipment.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AdventurerEquipmentSerializer


class ArmorViewSet(viewsets.ModelViewSet):
    queryset = Armor.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ArmorSerializer


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PropertySerializer


class SpellViewSet(viewsets.ModelViewSet):
    queryset = Spell.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SpellSerializer


class ToolViewSet(viewsets.ModelViewSet):
    queryset = Tool.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ToolSerializer


class WeaponViewSet(viewsets.ModelViewSet):
    queryset = Weapon.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WeaponSerializer
