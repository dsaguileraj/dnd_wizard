from rest_framework import serializers
from . import models


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class ConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Condition
        fields = '__all__'


class DamageTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.DamageType
        fields = '__all__'


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Feature
        fields = '__all__'


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Language
        fields = '__all__'


class MagicSchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MagicSchool
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Skill
        fields = '__all__'


class WeaponPropertySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.WeaponProperty
        fields = '__all__'
