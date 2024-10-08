from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.choices import Aligments, Dices, Sizes, Stats
from apps.core.models import Base, Description, Name, ProficiencyTrait


class Race(Name, ProficiencyTrait):
    creature_type = models.ManyToManyField("rules.CreatureType", blank=True)
    aligment = models.CharField(
        max_length=2, null=True, default=None, choices=Aligments
    )
    is_playable = models.BooleanField(default=False)

    # Ability Score Increase
    str_increase = models.IntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    dex_increase = models.IntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    con_increase = models.IntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    int_increase = models.IntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    wis_increase = models.IntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )
    cha_increase = models.IntegerField(
        default=0, validators=[MaxValueValidator(5), MinValueValidator(-5)]
    )

    # Racial Traits
    size = models.CharField(max_length=3, default=Sizes.M, choices=Sizes)
    speed = models.IntegerField(default=0)
    features = models.ManyToManyField("rules.Feature", blank=True)

    # Spellcasting
    innate_spellcaster = models.BooleanField(default=False)
    ability = models.CharField(
        max_length=3, null=True, default=None, choices=Stats
    )
    known_cantrips = models.IntegerField(
        null=True, default=None, validators=[MinValueValidator(1)]
    )
    spell_list = models.ForeignKey(
        "traits.EntityClass", on_delete=models.SET_NULL, null=True, default=None
    )


# Class
class EntityClass(Name, ProficiencyTrait):
    hit_dice = models.IntegerField(default=Dices.D4, choices=Dices)

    # Spellcasting
    innate_spellcaster = models.BooleanField(default=False)
    ability = models.CharField(
        max_length=3, null=True, default=None, choices=Stats
    )
    spell_list = models.ManyToManyField("actions.Spell", blank=True)


class ProgressTable(Base):
    entity_class = models.ForeignKey(
        "traits.EntityClass", on_delete=models.SET_NULL, null=True, default=None
    )
    level = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(20)]
    )
    features = models.ManyToManyField("rules.Feature", blank=True)

    # Spellcasting
    known_cantrips = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    known_spells = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_1 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_2 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_3 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_4 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_5 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_6 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_7 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_8 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    spell_slot_9 = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )

    class Meta:
        ordering = ["entity_class", "level"]
        unique_together = ["entity_class", "level"]


# Background
class Background(Description, Name, ProficiencyTrait):
    features = models.ManyToManyField("rules.Feature", blank=True)
    personality = models.TextField()
    ideal = models.TextField()
    bond = models.TextField()
    flaw = models.TextField()
