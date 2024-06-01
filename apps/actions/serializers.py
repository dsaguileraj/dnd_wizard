from rest_framework import permissions, serializers, viewsets
from .models import AdventurerEquipment, Armor, Property, Spell, Tool, Weapon


# AdventurerEquipment
class AdventurerEquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdventurerEquipment
        fields = '__all__'


class AdventurerEquipmentViewSet(viewsets.ModelViewSet):
    queryset = AdventurerEquipment.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = AdventurerEquipmentSerializer


# Armor
class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor
        fields = '__all__'


class ArmorViewSet(viewsets.ModelViewSet):
    queryset = Armor.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ArmorSerializer


# Property
class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'


class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PropertySerializer


# Spell
class SpellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spell
        fields = '__all__'


class SpellViewSet(viewsets.ModelViewSet):
    queryset = Spell.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = SpellSerializer


# Tool
class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


# Weapon
class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon
        fields = '__all__'


class WeaponViewSet(viewsets.ModelViewSet):
    queryset = Weapon.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = WeaponSerializer
