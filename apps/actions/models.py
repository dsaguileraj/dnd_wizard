from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from apps.core import choices
from apps.core.models import DescriptionModel, Item


class AdventureGear(Item):
    description = models.TextField(
        blank=True
    )

    class Meta:
        ordering = ["category", "name"]


class Armor(Item):
    armor_class = models.IntegerField(
        validators=[
            MinValueValidator(0)
        ]
    )
    dexterity_bonus = models.BooleanField(
        default=False
    )
    min_strength = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    disadvantage_stealth = models.BooleanField(
        default=False
    )

    class Meta:
        ordering = ["category", "name"]


class Spell(DescriptionModel):
    entity_class = models.ManyToManyField(
        'traits.EntityClass',
        blank=True
    )
    magic_school = models.ForeignKey(
        'rules.MagicSchool',
        on_delete=models.CASCADE
    )
    damage_type = models.ForeignKey(
        'rules.DamageType',
        on_delete=models.CASCADE
    )
    level = models.IntegerField(
        validators=[
            MaxValueValidator(9),
            MinValueValidator(0)
        ]
    )
    is_ritual = models.BooleanField(
        default=False
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

    # Range
    spell_range = models.IntegerField(
        validators=[
            MinValueValidator(-1)
        ]
    )

    # Casting Time
    casting_time = models.IntegerField(
        validators=[
            MinValueValidator(-1)
        ]
    )
    casting_measure = models.CharField(
        max_length=3,
        choices=choices.MeasureTime
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
        choices=choices.MeasureTime
    )

    def __str__(self) -> str:
        return f'{self.name} - {self.magic_school} [{self.level}]'

    class Meta:
        ordering = ["name"]


class Tool(Item):
    description = models.TextField(
        blank=True
    )

    class Meta:
        ordering = ["category", "name"]


class Trinket(models.Model):
    name = models.TextField(
        unique=True
    )

    class Meta:
        ordering = ["description"]


class Weapon(Item):
    hit_dices = models.IntegerField(
        default=1,
        validators=[
            MinValueValidator(1)
        ]
    )
    dice_sides = models.IntegerField(
        default=4,
        validators=[
            MinValueValidator(4)
        ]
    )
    modifier = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    damage_type = models.ForeignKey(
        'rules.DamageType',
        on_delete=models.CASCADE
    )
    property = models.ManyToManyField(
        'rules.WeaponProperty',
        blank=True
    )

    class Meta:
        ordering = ["category", "name"]
