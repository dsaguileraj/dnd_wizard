from rest_framework import permissions, viewsets
from . import models
from . import serializers


class EntityClassViewSet(viewsets.ModelViewSet):
    queryset = models.EntityClass.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.EntityClassSerializer


class RaceViewSet(viewsets.ModelViewSet):
    queryset = models.Race.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.RaceSerializer


class BackgroundViewSet(viewsets.ModelViewSet):
    queryset = models.Background.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.BackgroundSerializer


class BondViewSet(viewsets.ModelViewSet):
    queryset = models.Bond.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.BondSerializer


class FlawViewSet(viewsets.ModelViewSet):
    queryset = models.Flaw.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.FlawSerializer


class IdealViewSet(viewsets.ModelViewSet):
    queryset = models.Ideal.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.IdealSerializer


class PersonalityViewSet(viewsets.ModelViewSet):
    queryset = models.Personality.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.PersonalitySerializer
