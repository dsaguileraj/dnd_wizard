from rest_framework import permissions, viewsets
from . import models
from . import serializers


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = models.Character.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.CharacterSerializer


class EntityClassViewSet(viewsets.ModelViewSet):
    queryset = models.EntityClass.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.EntityClassSerializer


class MonsterViewSet(viewsets.ModelViewSet):
    queryset = models.Monster.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.MonsterSerializer


class RaceViewSet(viewsets.ModelViewSet):
    queryset = models.Race.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.RaceSerializer
