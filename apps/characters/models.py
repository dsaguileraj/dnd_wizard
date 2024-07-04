from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.models import Entity


class PlayableCharacter(Entity):
    player = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    experience = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    inspiration = models.BooleanField(
        default=False
    )
    
    # Traits
    entity_class = models.ForeignKey(
        'traits.EntityClass',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )

    # Background
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    bond = models.ForeignKey(
        'traits.Bond',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    flaw = models.ForeignKey(
        'traits.Flaw',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    ideal = models.ForeignKey(
        'traits.Ideal',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    personality = models.ForeignKey(
        'traits.Personality',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )

    # Inventory
    adventure_gears = models.ManyToManyField(
        'actions.AdventureGear',
        blank=True
    )
    armor = models.ManyToManyField(
        'actions.Armor',
        blank=True
    )
    tools = models.ManyToManyField(
        'actions.Tool',
        blank=True
    )
    trinkets = models.ManyToManyField(
        'actions.Trinket',
        blank=True
    )

    # Coins
    copper = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    silver = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    electrum = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    gold = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    platinum = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )


class NonPlayableCharacter(Entity):
    challenge = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(34),
            MinValueValidator(1)
        ]
    )
    legendary_creature = models.BooleanField(
        default=False
    )
