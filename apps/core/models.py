from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from dnd_wizard.utils import calculate_modifier
from .choices import Coins


class Base(models.Model):
    class Meta:
        abstract = True


class Name(Base):
    name = models.TextField(unique=True)

    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True
        ordering = ["name"]


class Description(Base):
    description = models.TextField(unique=True)

    class Meta:
        abstract = True


class Entity(Name):
    race = models.ForeignKey(
        "traits.Race", on_delete=models.SET_NULL, null=True, default=None
    )
    hit_points = models.IntegerField(
        default=10, validators=[MinValueValidator(0)]
    )

    # Ability Score
    as_str = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    as_dex = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    as_con = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    as_int = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    as_wis = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )
    as_cha = models.IntegerField(
        default=10, validators=[MinValueValidator(1), MaxValueValidator(30)]
    )

    # Equipment
    l_hand = models.ForeignKey(
        "actions.Weapon", on_delete=models.SET_NULL, null=True, default=None
    )
    r_hand = models.ForeignKey(
        "actions.Weapon", on_delete=models.SET_NULL, null=True, default=None
    )
    armor = models.ForeignKey(
        "actions.Armor", on_delete=models.SET_NULL, null=True, default=None
    )
    spells = models.ManyToManyField("actions.Spell", blank=True)

    @property
    def mod_str(self) -> int:
        return calculate_modifier(self.as_str)

    @property
    def mod_dex(self) -> int:
        return calculate_modifier(self.as_dex)

    @property
    def mod_con(self) -> int:
        return calculate_modifier(self.as_con)

    @property
    def mod_int(self) -> int:
        return calculate_modifier(self.as_int)

    @property
    def mod_wis(self) -> int:
        return calculate_modifier(self.as_wis)

    @property
    def mod_cha(self) -> int:
        return calculate_modifier(self.as_cha)

    class Meta:
        abstract = True


class Item(Name):
    coin = models.CharField(
        max_length=2, null=True, default=None, choices=Coins
    )
    cost = models.IntegerField(default=0, validators=[MinValueValidator(1)])
    weight = models.FloatField(default=0, validators=[MinValueValidator(0)])

    class Meta:
        abstract = True


class ProficiencyTrait(Base):
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
