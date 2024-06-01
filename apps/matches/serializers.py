from rest_framework import permissions, serializers, viewsets
from .models import Match, Player


# Match
class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'
        read_only_fields = ('created_at')


class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MatchSerializer


# Player
class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = '__all__'


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PlayerSerializer
