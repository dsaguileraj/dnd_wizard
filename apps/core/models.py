from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from .choices import Coins


class BaseModel(models.Model):
    name = models.CharField(
        max_length=50,
        unique=True
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True
        ordering = ['name']


class DescriptionModel(BaseModel):
    description = models.TextField(
        unique=True
    )

    class Meta:
        abstract = True


class Entity(BaseModel):
    race = models.ForeignKey(
        'traits.Race',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    hit_points = models.IntegerField(
        default=1,
        validators=[
            MinValueValidator(1)
        ]
    )

    # Ability Score
    str_score = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    dex_score = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    con_score = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    int_score = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    wis_score = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    cha_score = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )

    # Actions
    weapons = models.ManyToManyField(
        'actions.Weapon',
        blank=True
    )

    class Meta:
        abstract = True


class Item(BaseModel):
    category = models.ForeignKey(
        'rules.Category',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    cost = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    coin = models.CharField(
        max_length=2,
        null=True,
        default=None,
        choices=Coins
    )
    weight = models.FloatField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )

    class Meta:
        abstract = True


class PersonalCharacteristic(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE
    )
    description = models.TextField(
        unique=True
    )

    class Meta:
        abstract = True
        ordering = ['background', 'description']


class ProficiencyTrait(models.Model):
    # Proficiencies
    armor_choices = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(0)
        ]
    )
    armor_list = models.ManyToManyField(
        'actions.Armor',
        blank=True
    )
    language_choices = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(0)
        ]
    )
    language_list = models.ManyToManyField(
        'rules.Language',
        blank=True
    )
    skill_choices = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(0)
        ]
    )
    skill_list = models.ManyToManyField(
        'rules.Skill',
        blank=True
    )
    tool_choices = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(0)
        ]
    )
    tool_list = models.ManyToManyField(
        'actions.Tool',
        blank=True
    )
    weapon_choices = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(0)
        ]
    )
    weapon_list = models.ManyToManyField(
        'actions.Weapon',
        blank=True
    )

    # Saving Throw Proficiencies
    str_st = models.BooleanField(
        default=False
    )
    dex_st = models.BooleanField(
        default=False
    )
    con_st = models.BooleanField(
        default=False
    )
    int_st = models.BooleanField(
        default=False
    )
    wis_st = models.BooleanField(
        default=False
    )
    cha_st = models.BooleanField(
        default=False
    )

    class Meta:
        abstract = True
