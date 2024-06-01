from rest_framework import permissions, serializers, viewsets
from .models import Character, EntityClass, Monster, Race


# Character
class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CharacterSerializer


# Class
class EntityClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntityClass
        fields = '__all__'


class EntityClassViewSet(viewsets.ModelViewSet):
    queryset = EntityClass.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = EntityClassSerializer


# Monster
class MonsterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Monster
        fields = '__all__'


class MonsterViewSet(viewsets.ModelViewSet):
    queryset = Monster.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = MonsterSerializer


# Race
class RaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Race
        fields = '__all__'


class RaceViewSet(viewsets.ModelViewSet):
    queryset = Race.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RaceSerializer
