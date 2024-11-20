from rest_framework import permissions, viewsets
from . import models
from . import serializers


class PlayableCharacterViewSet(viewsets.ModelViewSet):
    queryset = models.PlayableCharacter.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.PlayableCharacterSerializer


class NonPlayableCharacterViewSet(viewsets.ModelViewSet):
    queryset = models.NonPlayableCharacter.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.NonPlayableCharacterSerializer
