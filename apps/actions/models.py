from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from apps.core.choices import Dices, MeasureTime
from apps.core.models import Description, Item, Name


class AdventureGear(Description, Item):
    ...


class Armor(Item):
    # (Field) category
    defense = models.IntegerField(
        default=11, validators=[MinValueValidator(11), MaxValueValidator(20)]
    )
    min_str = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    dex_bonus = models.BooleanField(default=False)
    stealth = models.BooleanField(default=False)


class Spell(Description, Name):
    magic_school = models.ForeignKey(
        "rules.MagicSchool", on_delete=models.SET_NULL, null=True, default=None
    )
    damage_type = models.ForeignKey(
        "rules.DamageType", on_delete=models.SET_NULL, null=True, default=None
    )
    level = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(9)]
    )
    spell_range = models.IntegerField(
        null=True, default=None, validators=[MinValueValidator(0), MaxValueValidator(500000)]
    )

    # Components
    verbal = models.BooleanField(default=False)
    somatic = models.BooleanField(default=False)
    material = models.BooleanField(default=False)
    materials = models.TextField(blank=True)

    # Casting Time
    is_ritual = models.BooleanField(default=False)
    casting_time = models.IntegerField(
        null=True, default=None, validators=[MinValueValidator(0), MaxValueValidator(500000)]
    )
    casting_measure = models.CharField(max_length=3, choices=MeasureTime)

    # Duration
    need_concentration = models.BooleanField(default=False)
    duration = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(500000)]
    )
    duration_measure = models.CharField(max_length=3, choices=MeasureTime)


class Tool(Description, Item):
    # (Field) category
    ...


class Weapon(Item):
    # (Field) category

    # Damage
    dices = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(5)]
    )
    hit_dice = models.IntegerField(
        null=True, default=None, choices=Dices
    )
    damage_type = models.ManyToManyField("rules.DamageType")

    # Properties
    ammunition = models.BooleanField(default=False)
    finesse = models.BooleanField(default=False)
    heavy = models.BooleanField(default=False)
    light = models.BooleanField(default=False)
    loading = models.BooleanField(default=False)
    range = models.BooleanField(default=False)
    reach = models.BooleanField(default=False)
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
