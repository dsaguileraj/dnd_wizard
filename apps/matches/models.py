from django.db import models
from django.contrib.auth.models import User


class Match(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250,
        blank=True
    )
    dungeon_master = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        verbose_name='Dungeon Master',
        null=True
    )
    characters = models.ManyToManyField(
        'characters.Character',
        verbose_name='Personajes'
    )
    created_at = models.DateField(
        verbose_name='Fecha de Creación',
        auto_now=True,
        editable=False
    )

    def __str__(self) -> str:
        return self.name


class MatchPlayer(models.Model):
    campaign = models.ForeignKey(
        'matches.Match',
        on_delete=models.CASCADE,
        verbose_name='Campaña'
    )
    player = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        verbose_name='Jugador',
        null=True
    )
    character = models.ForeignKey(
        'characters.Character',
        on_delete=models.SET_NULL,
        verbose_name='Personaje',
        null=True
    )

    class Meta:
        unique_together = ('campaign', 'player')
