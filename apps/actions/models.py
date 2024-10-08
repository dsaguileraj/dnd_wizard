from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from apps.core.choices import Dices, MeasureTime
from apps.core.models import Description, Item, Name


class AdventureGear(Description, Item):
    ...


class Armor(Item):
    # (Field) category
    armor_class = models.IntegerField(
        default=11, validators=[MinValueValidator(11), MaxValueValidator(20)]
    )
    required_str = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    dex_bonus = models.BooleanField(default=False)
    property = models.ManyToManyField("rules.ItemProperty", blank=True)


class Spell(Description, Name):
    magic_school = models.ForeignKey(
        "rules.MagicSchool", on_delete=models.SET_NULL, null=True, default=None
    )
    damage_type = models.ForeignKey(
        "rules.DamageType", on_delete=models.SET_NULL, null=True, default=None
    )
    level = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(9)]
    )
    spell_range = models.IntegerField(validators=[MinValueValidator(-1)])

    # Components
    verbal = models.BooleanField(default=False)
    somatic = models.BooleanField(default=False)
    material = models.BooleanField(default=False)
    materials = models.TextField(blank=True)

    # Casting Time
    is_ritual = models.BooleanField(default=False)
    casting_time = models.IntegerField(validators=[MinValueValidator(-1)])
    casting_measure = models.CharField(max_length=3, choices=MeasureTime)

    # Duration
    need_concentration = models.BooleanField(default=False)
    duration = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    duration_measure = models.CharField(max_length=3, choices=MeasureTime)

    def __str__(self) -> str:
        return f"{self.name} ({self.magic_school}) lvl: {self.level}"


class Tool(Description, Item):
    # (Field) category
    ...


class Weapon(Item):
    # (Field) category

    # Damage
    dices = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    hit_dice = models.IntegerField(
        null=True, default=None, choices=Dices)
    bonus = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    damage_type = models.ForeignKey(
        "rules.DamageType", on_delete=models.SET_NULL, null=True, default=None
    )

    # Properties
    property = models.ManyToManyField("rules.ItemProperty", blank=True)
    melee_weapon = models.BooleanField(default=False)
    ranged_weapon = models.BooleanField(default=False)
    min_range = models.PositiveSmallIntegerField(
        null=True, default=None, validators=[MinValueValidator(2)]
    )
    max_range = models.PositiveSmallIntegerField(
        null=True, default=None, validators=[MinValueValidator(3)]
    )
