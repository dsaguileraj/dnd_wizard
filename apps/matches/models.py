from django.db import models
from django.contrib.auth.models import User


class Player(User):
    name = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.name


class Match(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    dungeon_master = models.ForeignKey(Player, on_delete=models.SET_NULL)
    players = models.ManyToManyField(Player)
    created_at = models.DateField(auto_now=True)
    
    def __str__(self) -> str:
        return self.name
