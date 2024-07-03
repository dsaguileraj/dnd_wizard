from rest_framework import serializers
from . import models


class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Race
        fields = '__all__'


class EntityClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.EntityClass
        fields = '__all__'


class ClassTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ClassTable
        fields = '__all__'


class BackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Background
        fields = '__all__'
