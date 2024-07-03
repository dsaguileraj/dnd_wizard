from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.choices import Aligments, Dices, Sizes, Stats
from apps.core.models import ProficiencyTrait


class Race(ProficiencyTrait):
    creature_type = models.ForeignKey(
        'rules.CreatureType',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    aligment = models.CharField(
        max_length=2,
        default=Aligments.NEUTRAL_NEUTRAL,
        choices=Aligments
    )
    is_playable = models.BooleanField(
        default=False
    )

    # Ability Score Increase
    strength = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(-5)
        ]
    )
    dexterity = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(-5)
        ]
    )
    constitution = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(-5)
        ]
    )
    intelligence = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(-5)
        ]
    )
    wisdom = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(-5)
        ]
    )
    charisma = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(-5)
        ]
    )

    # Racial Traits
    size = models.CharField(
        max_length=3,
        default=Sizes.M,
        choices=Sizes
    )
    speed = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    features = models.ManyToManyField(
        'rules.Feature',
        blank=True
    )

    # Innate Spellcasting
    innate_spellcaster = models.BooleanField(
        default=False
    )
    ability = models.CharField(
        max_length=3,
        null=True,
        default=None,
        choices=Stats
    )
    cantrips = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_list = models.ForeignKey(
        'traits.EntityClass',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )

    class Meta:
        ordering = ["name"]


class EntityClass(ProficiencyTrait):
    hit_die = models.IntegerField(
        default=Dices.D4,
        choices=Dices
    )

    # Saving Throw Proficiencies
    strength = models.BooleanField(
        default=False
    )
    dexterity = models.BooleanField(
        default=False
    )
    constitution = models.BooleanField(
        default=False
    )
    intelligence = models.BooleanField(
        default=False
    )
    wisdom = models.BooleanField(
        default=False
    )
    charisma = models.BooleanField(
        default=False
    )

    # Spellcasting
    innate_spellcaster = models.BooleanField(
        default=False
    )
    ability = models.CharField(
        max_length=3,
        null=True,
        default=None,
        choices=Stats
    )
    spell_list = models.ManyToManyField(
        'actions.Spell',
        blank=True
    )

    class Meta:
        ordering = ["name"]

class ClassTable(models.Model):
    entity_class = models.ForeignKey(
        'traits.EntityClass',
        on_delete=models.CASCADE
    )
    level = models.IntegerField(
        validators=[
            MaxValueValidator(20),
            MinValueValidator(1)
        ]
    )
    features = models.ManyToManyField(
        'rules.Feature',
        blank=True
    )
    known_cantrips = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    known_spells = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_1 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_2 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_3 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_4 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_5 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_6 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_7 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_8 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    spell_slot_9 = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    
    class Meta:
        unique_together = ['level', 'entity_class']
    

class Background(ProficiencyTrait):
    features = models.ManyToManyField(
        'rules.Feature',
        blank=True
    )
    
    # Personal Characteristic
    bond = models.TextField(
        unique=True
    )
    flaw = models.TextField(
        unique=True
    )
    ideal = models.TextField(
        unique=True
    )
    personality = models.TextField(
        unique=True
    )
    
    class Meta:
        ordering = ["name"]
