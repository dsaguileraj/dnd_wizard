from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.choices import Sizes
from apps.core.models import BaseModel, PersonalCharacteristic


class EntityClass(BaseModel):
    hit_dice = models.IntegerField(
        validators=[
            MaxValueValidator(20),
            MinValueValidator(4)
        ]
    )

    # Saving Throws
    st_str = models.BooleanField(
        default=False
    )
    st_dex = models.BooleanField(
        default=False
    )
    st_con = models.BooleanField(
        default=False
    )
    st_int = models.BooleanField(
        default=False
    )
    st_wis = models.BooleanField(
        default=False
    )
    st_cha = models.BooleanField(
        default=False
    )

    # Traits
    armor_proficiencies = models.ManyToManyField(
        'actions.Armor',
    )
    weapon_proficiencies = models.ManyToManyField(
        'actions.Weapon',
    )
    can_spellcasting = models.BooleanField(
        default=False
    )

    # Traits Choices
    max_tool_proficiencies_choices = models.IntegerField(
        validators=[
            MaxValueValidator(3),
            MinValueValidator(0)
        ]
    )
    tool_proficiencies_choices = models.ManyToManyField(
        'actions.Tool',
        blank=True
    )
    max_skill_choices = models.IntegerField(
        validators=[
            MaxValueValidator(3),
            MinValueValidator(1)
        ]
    )
    skill_choices = models.ManyToManyField(
        'rules.SKill',
    )

    class Meta:
        ordering = ["name"]


class Race(BaseModel):
    is_playable = models.BooleanField(
        default=False
    )

    # Inherited Stat Bonus
    inh_str = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )
    inh_dex = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )
    inh_con = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )
    inh_int = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )
    inh_wis = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )
    inh_cha = models.IntegerField(
        default=0,
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )

    # Racial Traits
    size = models.CharField(
        max_length=3,
        default=Sizes.M,
        choices=Sizes
    )
    speed = models.IntegerField(
        validators=[
            MinValueValidator(0)
        ]
    )
    damage_immunities = models.ManyToManyField(
        'rules.DamageType',
        related_name='race_immunities',
        blank=True
    )
    damage_resistances = models.ManyToManyField(
        'rules.DamageType',
        related_name='race_resistances',
        blank=True
    )
    damage_vulnerabilities = models.ManyToManyField(
        'rules.DamageType',
        related_name='race_vulnerabilities',
        blank=True
    )
    condition_immunities = models.ManyToManyField(
        'rules.Condition',
        blank=True
    )

    # Traits
    language_choices = models.IntegerField(
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )
    languages = models.ManyToManyField(
        'rules.Language',
        blank=True
    )
    features = models.ManyToManyField(
        'rules.Feature',
        blank=True
    )

    class Meta:
        ordering = ["name"]


class Background(BaseModel):
    # Traits
    skills = models.ManyToManyField(
        'rules.Skill',
        max_length=2
    )

    # Traits Choices
    language_choices = models.IntegerField(
        validators=[
            MaxValueValidator(2),
            MinValueValidator(0)
        ]
    )
    max_tool_proficiencies_choices = models.IntegerField(
        validators=[
            MaxValueValidator(2),
            MinValueValidator(1)
        ]
    )
    tool_proficiencies_choices = models.ManyToManyField(
        'actions.Tool',
    )

    class Meta:
        ordering = ["name"]


class Bond(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"


class Flaw(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"


class Ideal(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"


class Personality(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"
