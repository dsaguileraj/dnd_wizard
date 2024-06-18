from rest_framework import serializers
from . import models


class BackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Background
        fields = '__all__'


class BondSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Bond
        fields = '__all__'


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Feature
        fields = '__all__'


class FlawSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Flaw
        fields = '__all__'


class IdealSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ideal
        fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Language
        fields = '__all__'


class PersonalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Personality
        fields = '__all__'


class SavingThrowSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SavingThrow
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Skill
        fields = '__all__'
