from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.choices import Dices
from apps.core.models import Item


class Weapon(Item):
    description = models.TextField(blank=True)

    # Damage
    hit_dice = models.IntegerField(
        null=True, default=None, choices=Dices
    )
    num_dice = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    modifier = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(10)]
    )

    # Properties
    ammunition = models.BooleanField(default=False)
    finesse = models.BooleanField(default=False)
    heavy = models.BooleanField(default=False)
    light = models.BooleanField(default=False)
    loading = models.BooleanField(default=False)
    range = models.BooleanField(default=False)
    reach = models.BooleanField(default=False)
    shield = models.BooleanField(default=False)
    special = models.BooleanField(default=False)
    thrown = models.BooleanField(default=False)
    two_handed = models.BooleanField(default=False)
    versatile = models.BooleanField(default=False)

    # Range
    min_range = models.IntegerField(
        null=True, default=None, validators=[MinValueValidator(1), MaxValueValidator(25)]
    )
    max_range = models.IntegerField(
        null=True, default=None, validators=[MinValueValidator(2), MaxValueValidator(100)]
    )
