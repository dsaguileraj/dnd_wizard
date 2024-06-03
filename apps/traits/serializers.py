from rest_framework import serializers
from .models import Background, Bond, Feature, Flaw, Ideal, Language, Personality, Proficiency


class BackgroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Background
        fields = '__all__'


class BondSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bond
        fields = '__all__'


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'


class FlawSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flaw
        fields = '__all__'


class IdealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ideal
        fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'


class PersonalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Personality
        fields = '__all__'


class ProficiencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Proficiency
        fields = '__all__'
