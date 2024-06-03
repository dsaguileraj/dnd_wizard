from rest_framework import serializers
from .models import Character, EntityClass, Monster, Race


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'


class EntityClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntityClass
        fields = '__all__'


class MonsterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monster
        fields = '__all__'


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = '__all__'
