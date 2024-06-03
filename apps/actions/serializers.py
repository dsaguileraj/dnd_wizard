from rest_framework import serializers
from .models import AdventurerEquipment, Armor, Property, Spell, Tool, Weapon


class AdventurerEquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdventurerEquipment
        fields = '__all__'


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armor
        fields = '__all__'


class PropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        fields = '__all__'


class SpellSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spell
        fields = '__all__'


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon
        fields = '__all__'
