from rest_framework import viewsets, permissions
from . import models
from . import serializers


class MatchViewSet(viewsets.ModelViewSet):
    queryset = models.Match.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.MatchSerializer


class MatchPlayerViewSet(viewsets.ModelViewSet):
    queryset = models.MatchPlayer.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.MatchPlayerSerializer
