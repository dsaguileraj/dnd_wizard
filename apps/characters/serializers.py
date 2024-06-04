from rest_framework import serializers
from . import models


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Character
        fields = '__all__'


class EntityClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EntityClass
        fields = '__all__'


class MonsterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Monster
        fields = '__all__'


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Race
        fields = '__all__'
