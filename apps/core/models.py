from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from dnd_wizard.utils import calculate_modifier
from .choices import Coins


class BaseModel(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True
        ordering = ["name"]


class DescriptionModel(BaseModel):
    description = models.TextField(unique=True)

    class Meta:
        abstract = True


class Entity(BaseModel):
    race = models.ForeignKey(
        "traits.Race", on_delete=models.SET_NULL, blank=True, null=True, default=None
    )
    hit_points = models.PositiveSmallIntegerField(default=10)

    # Ability Score
    str_score = models.PositiveSmallIntegerField(
        default=10, validators=[MaxValueValidator(30)]
    )
    dex_score = models.PositiveSmallIntegerField(
        default=10, validators=[MaxValueValidator(30)]
    )
    con_score = models.PositiveSmallIntegerField(
        default=10, validators=[MaxValueValidator(30)]
    )
    int_score = models.PositiveSmallIntegerField(
        default=10, validators=[MaxValueValidator(30)]
    )
    wis_score = models.PositiveSmallIntegerField(
        default=10, validators=[MaxValueValidator(30)]
    )
    cha_score = models.PositiveSmallIntegerField(
        default=10, validators=[MaxValueValidator(30)]
    )

    # Actions
    weapons = models.ManyToManyField("actions.Weapon", blank=True)

    @property
    def str_modifier(self) -> int:
        return calculate_modifier(self.str_score)

    @property
    def dex_modifier(self) -> int:
        return calculate_modifier(self.dex_score)

    @property
    def con_modifier(self) -> int:
        return calculate_modifier(self.con_score)

    @property
    def int_modifier(self) -> int:
        return calculate_modifier(self.int_score)

    @property
    def wis_modifier(self) -> int:
        return calculate_modifier(self.wis_score)

    @property
    def cha_modifier(self) -> int:
        return calculate_modifier(self.cha_score)

    class Meta:
        abstract = True


class Item(BaseModel):
    category = models.ForeignKey(
        "rules.Category", on_delete=models.SET_NULL, blank=True,  null=True, default=None
    )
    cost = models.PositiveSmallIntegerField(default=0)
    coin = models.CharField(
        max_length=2, blank=True, null=True, default=None, choices=Coins
    )
    weight = models.FloatField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        abstract = True


class ProficiencyTrait(models.Model):
    # Proficiencies
    armor_choices = models.PositiveSmallIntegerField(default=0)
    armor_list = models.ManyToManyField("actions.Armor", blank=True)

    language_choices = models.PositiveSmallIntegerField(default=0)
    language_list = models.ManyToManyField("rules.Language", blank=True)

    skill_choices = models.PositiveSmallIntegerField(default=0)
    skill_list = models.ManyToManyField("rules.Skill", blank=True)

    tool_choices = models.PositiveSmallIntegerField(default=0)
    tool_list = models.ManyToManyField("actions.Tool", blank=True)

    weapon_choices = models.PositiveSmallIntegerField(default=0)
    weapon_list = models.ManyToManyField("actions.Weapon", blank=True)

    # Saving Throw Proficiencies
    str_st = models.BooleanField(default=False)
    dex_st = models.BooleanField(default=False)
    con_st = models.BooleanField(default=False)
    int_st = models.BooleanField(default=False)
    wis_st = models.BooleanField(default=False)
    cha_st = models.BooleanField(default=False)

    class Meta:
        abstract = True
