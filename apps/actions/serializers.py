from rest_framework import serializers
from . import models


class AdventureGearSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AdventureGear
        fields = '__all__'


class ArmorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Armor
        fields = '__all__'


class SpellSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Spell
        fields = '__all__'


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tool
        fields = '__all__'


class TrinketSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Trinket
        fields = '__all__'


class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Weapon
        fields = '__all__'
