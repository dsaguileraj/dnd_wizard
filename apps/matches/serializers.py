from rest_framework import permissions, serializers, viewsets
from .models import Match, MatchPlayer


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'
        read_only_fields = ('created_at',)


class MatchPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatchPlayer
        fields = '__all__'
