from rest_framework import permissions, viewsets
from . import models
from . import serializers


class BackgroundViewSet(viewsets.ModelViewSet):
    queryset = models.Background.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.BackgroundSerializer


class BondViewSet(viewsets.ModelViewSet):
    queryset = models.Bond.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.BondSerializer


class DamageImmunityViewSet(viewsets.ModelViewSet):
    queryset = models.DamageImmunity.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.DamageImmunitySerializer


class DamageResistenceViewSet(viewsets.ModelViewSet):
    queryset = models.DamageResistence.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.DamageResistenceSerializer


class DamageVulnerabilityViewSet(viewsets.ModelViewSet):
    queryset = models.DamageVulnerability.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.DamageVulnerabilitySerializer


class FeatureViewSet(viewsets.ModelViewSet):
    queryset = models.Feature.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.FeatureSerializer


class FlawViewSet(viewsets.ModelViewSet):
    queryset = models.Flaw.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.FlawSerializer


class IdealViewSet(viewsets.ModelViewSet):
    queryset = models.Ideal.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.IdealSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = models.Language.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.LanguageSerializer


class PersonalityViewSet(viewsets.ModelViewSet):
    queryset = models.Personality.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.PersonalitySerializer


class SavingThrowViewSet(viewsets.ModelViewSet):
    queryset = models.SavingThrow.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.SavingThrowSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = models.Skill.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.SkillSerializer


class StateImmunityViewSet(viewsets.ModelViewSet):
    queryset = models.StateImmunity.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.StateImmunitySerializer
