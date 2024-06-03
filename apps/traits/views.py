from rest_framework import permissions, viewsets
from .models import Background, Bond, Feature, Flaw, Ideal, Language, Personality, Proficiency
from .serializers import BackgroundSerializer, BondSerializer, FeatureSerializer, FlawSerializer, IdealSerializer, LanguageSerializer, PersonalitySerializer, ProficiencySerializer


class BackgroundViewSet(viewsets.ModelViewSet):
    queryset = Background.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BackgroundSerializer


class BondViewSet(viewsets.ModelViewSet):
    queryset = Bond.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = BondSerializer


class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = FeatureSerializer


class FlawViewSet(viewsets.ModelViewSet):
    queryset = Flaw.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = FlawSerializer


class IdealViewSet(viewsets.ModelViewSet):
    queryset = Ideal.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = IdealSerializer


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = LanguageSerializer


class PersonalityViewSet(viewsets.ModelViewSet):
    queryset = Personality.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PersonalitySerializer


class ProficiencyViewSet(viewsets.ModelViewSet):
    queryset = Proficiency.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ProficiencySerializer
