from rest_framework import permissions, serializers, viewsets
from rest_framework.response import Response
from apps.actions.models import Spell
from apps.actions.serializers import SpellSerializer
from api.core.permissions.base_permission import BasePermissionView


class SpellViewSet(BasePermissionView):

    def list(self, request):
        spells = Spell.objects.all()
        serializer = SpellSerializer(spells, many=True)
        return Response(serializer.data, status=200)

    def create(self, request):
        # return Response()
        pass

    def update(self, request, id):
        # return Response()
        pass

    def retrieve(self, request, id):
        # return Response()
        pass

    def destroy(self, request, id):
        # return Response()
        pass

    # permission_classes = [permissions.AllowAny]
    # serializer_class = SpellSerializer
