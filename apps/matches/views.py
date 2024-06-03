from rest_framework import viewsets, permissions
from .models import Match, MatchPlayer
from .serializers import MatchSerializer, MatchPlayerSerializer


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MatchSerializer


class MatchPlayerViewSet(viewsets.ModelViewSet):
    queryset = MatchPlayer.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MatchPlayerSerializer
