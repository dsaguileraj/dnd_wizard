from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from apps.core.choices import Dices, MeasureTime
from apps.core.models import DescriptionModel, Item


class AdventureGear(Item):
    description = models.TextField(blank=True)


class Armor(Item):
    armor_class = models.PositiveSmallIntegerField(default=11)
    gives_dex_bonus = models.BooleanField(default=False)
    dex_bonus = models.PositiveSmallIntegerField(default=0)
    required_str = models.PositiveSmallIntegerField(default=0)
    property = models.ManyToManyField("rules.ItemProperty", blank=True)


class Spell(DescriptionModel):
    magic_school = models.ForeignKey(
        "rules.MagicSchool", on_delete=models.SET_NULL, null=True, default=None)
    damage_type = models.ForeignKey(
        "rules.DamageType", on_delete=models.SET_NULL, null=True, default=None)
    level = models.PositiveSmallIntegerField(validators=[MaxValueValidator(9)])
    spell_range = models.SmallIntegerField(validators=[MinValueValidator(-1)])

    # Components
    verbal = models.BooleanField(default=False)
    somatic = models.BooleanField(default=False)
    material = models.BooleanField(default=False)
    materials = models.TextField(blank=True)

    # Casting Time
    is_ritual = models.BooleanField(default=False)
    casting_time = models.SmallIntegerField(validators=[MinValueValidator(-1)])
    casting_measure = models.CharField(max_length=3, choices=MeasureTime)

    # Duration
    need_concentration = models.BooleanField(default=False)
    duration = models.PositiveSmallIntegerField(default=0)
    duration_measure = models.CharField(max_length=3, choices=MeasureTime)

    def __str__(self) -> str:
        return f"{self.name} ({self.magic_school}) lvl: {self.level}"


class Tool(Item):
    description = models.TextField(blank=True)


class Trinket(models.Model):
    name = models.TextField(unique=True)


class Weapon(Item):
    dices = models.PositiveSmallIntegerField(default=0)
    hit_dice = models.PositiveSmallIntegerField(null=True, default=None, choices=Dices)
    bonus = models.PositiveSmallIntegerField(default=0)
    damage_type = models.ForeignKey(
        "rules.DamageType", on_delete=models.SET_NULL, null=True, default=None)
    property = models.ManyToManyField("rules.ItemProperty", blank=True)
    melee_weapon = models.BooleanField(default=False)
    ranged_weapon = models.BooleanField(default=False)
    min_range = models.PositiveSmallIntegerField(
        null=True, default=None, validators=[MinValueValidator(2)])
    max_range = models.PositiveSmallIntegerField(
        null=True, default=None, validators=[MinValueValidator(3)])
