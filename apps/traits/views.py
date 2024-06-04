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


class ProficiencyViewSet(viewsets.ModelViewSet):
    queryset = models.Proficiency.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ProficiencySerializer
