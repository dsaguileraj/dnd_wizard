from rest_framework import permissions, viewsets
from . import models
from . import serializers


class RaceViewSet(viewsets.ModelViewSet):
    queryset = models.Race.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.RaceSerializer


class EntityClassViewSet(viewsets.ModelViewSet):
    queryset = models.EntityClass.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.EntityClassSerializer


class ClassTableViewSet(viewsets.ModelViewSet):
    queryset = models.ClassTable.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.ClassTableSerializer


class BackgroundViewSet(viewsets.ModelViewSet):
    queryset = models.Background.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = serializers.BackgroundSerializer
