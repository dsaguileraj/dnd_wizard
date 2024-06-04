from rest_framework import permissions, serializers, viewsets
from . import models


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Match
        fields = '__all__'
        read_only_fields = ('created_at',)


class MatchPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.MatchPlayer
        fields = '__all__'
