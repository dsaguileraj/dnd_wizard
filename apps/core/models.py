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

    # Ability Score
    strength = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    dexterity = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    constitution = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    intelligence = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    wisdom = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    charisma = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )

    # Actions
    armor = models.ManyToManyField(
        'actions.Armor',
        blank=True
    )
    spells = models.ManyToManyField(
        'actions.Spell',
        blank=True
    )
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
        default=Coins.COPPER,
        choices=Coins
    )
    weight = models.FloatField(
        default=0
    )

    class Meta:
        abstract = True


class ProficiencyTrait(BaseModel):
    # Proficiencies
    armors = models.ManyToManyField(
        'actions.Armor',
        blank=True
    )
    languages = models.ManyToManyField(
        'rules.Language',
        blank=True
    )
    skills = models.ManyToManyField(
        'rules.Skill',
        blank=True
    )
    tool = models.ManyToManyField(
        'actions.Tool',
        blank=True
    )
    weapons = models.ManyToManyField(
        'actions.Weapon',
        blank=True
    )

    class Meta:
        abstract = True
