from django.db import models
from django.contrib.auth.models import User


class Player(User):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_player',
        max_length=255
    )

    def __str__(self) -> str:
        return self.name


class Match(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_match',
        max_length=50
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_match',
        max_length=250,
        blank=True
    )
    dungeon_master = models.ForeignKey(
        Player,
        on_delete=models.SET_NULL,
        related_name='dungeon_master_match',
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
