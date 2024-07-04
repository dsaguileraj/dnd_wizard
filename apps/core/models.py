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
    strength = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    dexterity = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    constitution = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    intelligence = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    wisdom = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    charisma = models.IntegerField(
        default=10,
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )

    # Actions
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


class ProficiencyTrait(BaseModel):
    # Proficiencies
    armors = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(1)
        ]
    )
    armors_list = models.ManyToManyField(
        'actions.Armor',
        blank=True
    )
    languages = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(1)
        ]
    )
    languages_list = models.ManyToManyField(
        'rules.Language',
        blank=True
    )
    skills = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(1)
        ]
    )
    skills_list = models.ManyToManyField(
        'rules.Skill',
        blank=True
    )
    tools = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(1)
        ]
    )
    tools_list = models.ManyToManyField(
        'actions.Tool',
        blank=True
    )
    weapons = models.IntegerField(
        null=True,
        default=None,
        validators=[
            MinValueValidator(1)
        ]
    )
    weapons_list = models.ManyToManyField(
        'actions.Weapon',
        blank=True
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

    class Meta:
        abstract = True
