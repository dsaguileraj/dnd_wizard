from django.contrib.auth.models import User
from django.db import models
from apps.core.models import DescriptionModel

class Match(DescriptionModel):
    dungeon_master = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    characters = models.ManyToManyField(
        'characters.PlayableCharacter',
    )
    created_at = models.DateField(
        auto_now_add=True,
        editable=False
    )
    
    class Meta:
        ordering = ["name"]


class MatchPlayer(models.Model):
    campaign = models.ForeignKey(
        'matches.Match',
        on_delete=models.CASCADE,
    )
    player = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True
    )
    character = models.ForeignKey(
        'characters.PlayableCharacter',
        on_delete=models.SET_NULL,
        null=True
    )

    class Meta:
        unique_together = ('campaign', 'player')
