from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from apps.core.choices import Dices, MeasureTime
from apps.core.models import DescriptionModel, Item


class AdventureGear(Item):
    description = models.TextField(
        blank=True
    )


class Armor(Item):
    armor_class = models.IntegerField(
        default=11,
        validators=[
            MinValueValidator(0)
        ]
    )
    gives_dex_bonus = models.BooleanField(
        default=False
    )
    dex_bonus = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(0)
        ]
    )
    required_str = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    property = models.ManyToManyField(
        'rules.ItemProperty',
        blank=True
    )
    compatibility = models.ManyToManyField(
        'rules.CreatureType',
        blank=True
    )


class Spell(DescriptionModel):
    magic_school = models.ForeignKey(
        'rules.MagicSchool',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    damage_type = models.ForeignKey(
        'rules.DamageType',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    level = models.IntegerField(
        validators=[
            MaxValueValidator(9),
            MinValueValidator(0)
        ]
    )
    spell_range = models.IntegerField(
        validators=[
            MinValueValidator(-1)
        ]
    )

    # Components
    verbal = models.BooleanField(
        default=False
    )
    somatic = models.BooleanField(
        default=False
    )
    material = models.BooleanField(
        default=False
    )
    materials = models.TextField(
        blank=True
    )

    # Casting Time
    is_ritual = models.BooleanField(
        default=False
    )
    casting_time = models.IntegerField(
        validators=[
            MinValueValidator(-1)
        ]
    )
    casting_measure = models.CharField(
        max_length=3,
        choices=MeasureTime
    )

    # Duration
    need_concentration = models.BooleanField(
        default=False
    )
    duration = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    duration_measure = models.CharField(
        max_length=3,
        choices=MeasureTime
    )

    def __str__(self) -> str:
        return f'{self.name} ({self.magic_school}) lvl: {self.level}'


class Tool(Item):
    description = models.TextField(
        blank=True
    )


class Trinket(models.Model):
    name = models.TextField(
        unique=True
    )


class Weapon(Item):
    dices = models.IntegerField(
        default=1,
        validators=[
            MinValueValidator(0)
        ]
    )
    hit_dice = models.IntegerField(
        null=True,
        default=Dices.D4,
        choices=Dices
    )
    bonus = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    damage_type = models.ForeignKey(
        'rules.DamageType',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    property = models.ManyToManyField(
        'rules.ItemProperty',
        blank=True
    )
    melee_weapon = models.BooleanField(
        default=False
    )
    melee_range = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(1)
        ]
    )
    ranged_weapon = models.BooleanField(
        default=False
    )
    min_range = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(2)
        ]
    )
    max_range = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(3)
        ]
    )
