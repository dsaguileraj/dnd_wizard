from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.choices import Aligments, Dices, Sizes, Stats
from apps.core.models import BaseModel, DescriptionModel, ProficiencyTrait


class Race(BaseModel, ProficiencyTrait):
    creature_type = models.ManyToManyField("rules.CreatureType", blank=True)
    aligment = models.CharField(
        max_length=2, null=True, default=None, choices=Aligments
    )
    is_playable = models.BooleanField(default=False)

    # Ability Score Increase
    str_increase = models.SmallIntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    dex_increase = models.SmallIntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    con_increase = models.SmallIntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    int_increase = models.SmallIntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    wis_increase = models.SmallIntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    cha_increase = models.SmallIntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )

    # Racial Traits
    size = models.CharField(max_length=3, default=Sizes.M, choices=Sizes)
    speed = models.PositiveSmallIntegerField(default=0)
    features = models.ManyToManyField("rules.Feature", blank=True)

    # Immunities, Resistances & Vulneravilities
    condition_immunity = models.ManyToManyField(
        "rules.Condition", related_name="condition_immunity_by_race", blank=True
    )
    damage_immunity = models.ManyToManyField(
        "rules.DamageType", related_name="damage_immunity_by_race", blank=True
    )
    damage_resistance = models.ManyToManyField(
        "rules.DamageType", related_name="damage_resistance_by_race", blank=True
    )
    damage_vulnerability = models.ManyToManyField(
        "rules.DamageType", related_name="damage_vulnerability_by_race", blank=True
    )

    # Spellcasting
    innate_spellcaster = models.BooleanField(default=False)
    ability = models.CharField(
        max_length=3, null=True, default=None, choices=Stats
    )
    known_cantrips = models.PositiveSmallIntegerField(
        null=True, default=None, validators=[MinValueValidator(1)]
    )
    spell_list = models.ForeignKey(
        "traits.EntityClass", on_delete=models.SET_NULL, null=True, default=None
    )


# Class
class EntityClass(BaseModel, ProficiencyTrait):
    hit_dice = models.IntegerField(default=Dices.D4, choices=Dices)

    # Spellcasting
    innate_spellcaster = models.BooleanField(default=False)
    ability = models.CharField(
        max_length=3, null=True, default=None, choices=Stats
    )
    spell_list = models.ManyToManyField("actions.Spell", blank=True)


class ProgressTable(models.Model):
    entity_class = models.ForeignKey(
        "traits.EntityClass", on_delete=models.SET_NULL, null=True, default=None
    )
    level = models.PositiveSmallIntegerField(
        validators=[MaxValueValidator(20), MinValueValidator(1)]
    )
    features = models.ManyToManyField("rules.Feature", blank=True)

    # Spellcasting
    known_cantrips = models.PositiveSmallIntegerField(default=0)
    known_spells = models.PositiveSmallIntegerField(default=0)
    spell_slot_1 = models.PositiveSmallIntegerField(default=0)
    spell_slot_2 = models.PositiveSmallIntegerField(default=0)
    spell_slot_3 = models.PositiveSmallIntegerField(default=0)
    spell_slot_4 = models.PositiveSmallIntegerField(default=0)
    spell_slot_5 = models.PositiveSmallIntegerField(default=0)
    spell_slot_6 = models.PositiveSmallIntegerField(default=0)
    spell_slot_7 = models.PositiveSmallIntegerField(default=0)
    spell_slot_8 = models.PositiveSmallIntegerField(default=0)
    spell_slot_9 = models.PositiveSmallIntegerField(default=0)

    class Meta:
        ordering = ["entity_class", "level"]
        unique_together = ["entity_class", "level"]


# Background
class Background(DescriptionModel, ProficiencyTrait):
    features = models.ManyToManyField("rules.Feature", blank=True)
    personality = models.TextField()
    ideal = models.TextField()
    bond = models.TextField()
    flaw = models.TextField()
