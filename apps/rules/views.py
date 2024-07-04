from rest_framework import viewsets, permissions
from . import models
from . import serializers


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = models.Category.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.CategorySerializer


class ConditionViewSet(viewsets.ModelViewSet):
    queryset = models.Condition.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ConditionSerializer


class CreatureTypeViewSet(viewsets.ModelViewSet):
    queryset = models.CreatureType.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.CreatureTypeSerializer


class DamageTypeViewSet(viewsets.ModelViewSet):
    queryset = models.DamageType.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.DamageTypeSerializer


class FeatureViewSet(viewsets.ModelViewSet):
    queryset = models.Feature.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.FeatureSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = models.Language.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.LanguageSerializer


class MagicSchoolViewSet(viewsets.ModelViewSet):
    queryset = models.MagicSchool.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.MagicSchoolSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = models.Skill.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.SkillSerializer


class ItemPropertyViewSet(viewsets.ModelViewSet):
    queryset = models.ItemProperty.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ItemPropertySerializer
