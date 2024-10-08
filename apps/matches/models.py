from django.contrib.auth.models import User
from django.db import models
from apps.core.models import Description, Name


class Match(Description, Name):
    dungeon_master = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, default=None
    )
    characters = models.ManyToManyField(
        "characters.PlayableCharacter", blank=True
    )
    created_at = models.DateField(auto_now_add=True, editable=False)
