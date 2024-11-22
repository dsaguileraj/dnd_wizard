from rest_framework import serializers
from . import models


class PlayableCharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.PlayableCharacter
        fields = "__all__"


class NonPlayableCharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.NonPlayableCharacter
        fields = "__all__"
