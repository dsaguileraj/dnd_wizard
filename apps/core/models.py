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
        "traits.Race", on_delete=models.SET_NULL, null=True, default=None
    )
    hit_points = models.IntegerField(
        default=10, validators=[MinValueValidator(0)]
    )

    # Ability Score
    str_score = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    dex_score = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    con_score = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    int_score = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    wis_score = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    cha_score = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
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
    cost = models.IntegerField(default=0, validators=[MinValueValidator(1)])
    coin = models.CharField(
        max_length=2, null=True, default=None, choices=Coins
    )
    weight = models.FloatField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        abstract = True


class ProficiencyTrait(models.Model):
    # Proficiencies
    prof_armor = models.ManyToManyField("actions.Armor", blank=True)
    prof_language = models.ManyToManyField("rules.Language", blank=True)
    prof_skill = models.ManyToManyField("rules.Skill", blank=True)
    prof_tool = models.ManyToManyField("actions.Tool", blank=True)
    prof_weapon = models.ManyToManyField("actions.Weapon", blank=True)

    # Saving Throws
    st_str = models.BooleanField(default=False)
    st_dex = models.BooleanField(default=False)
    st_con = models.BooleanField(default=False)
    st_int = models.BooleanField(default=False)
    st_wis = models.BooleanField(default=False)
    st_cha = models.BooleanField(default=False)

    class Meta:
        abstract = True
