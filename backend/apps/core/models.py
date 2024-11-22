from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from dnd_wizard.utils import calculate_modifier


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


class Entity(Name):
    hit_points = models.IntegerField(
        default=10, validators=[MinValueValidator(0), MaxValueValidator(1000)]
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
    
    # Weapons
    # Spells

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
