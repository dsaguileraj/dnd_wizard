from rest_framework import permissions, viewsets
from .models import Character, EntityClass, Monster, Race
from .serializers import CharacterSerializer, EntityClassSerializer, MonsterSerializer, RaceSerializer


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CharacterSerializer


class EntityClassViewSet(viewsets.ModelViewSet):
    queryset = EntityClass.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EntityClassSerializer


class MonsterViewSet(viewsets.ModelViewSet):
    queryset = Monster.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MonsterSerializer


class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RaceSerializer
