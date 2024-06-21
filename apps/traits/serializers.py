from rest_framework import serializers
from . import models


class EntityClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EntityClass
        fields = '__all__'


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Race
        fields = '__all__'


class BackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Background
        fields = '__all__'


class BondSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Bond
        fields = '__all__'


class FlawSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Flaw
        fields = '__all__'


class IdealSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ideal
        fields = '__all__'


class PersonalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Personality
        fields = '__all__'
