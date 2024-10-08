from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.models import Base, Entity
from dnd_wizard.utils import LEVELS


class PlayableCharacter(Entity):
    player = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, default=None
    )
    experience = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    inspiration = models.BooleanField(default=False)

    # Traits
    background = models.ForeignKey(
        "traits.Background", on_delete=models.SET_NULL, null=True, default=None
    )
    entity_class = models.ForeignKey(
        "traits.EntityClass", on_delete=models.SET_NULL, null=True, default=None
    )

    @property
    def level(self) -> int:
        base_level = 0
        for lvl, exp_required in LEVELS.items():
            if self.experience >= exp_required:
                base_level = lvl
            else:
                break
        return base_level

    @property
    def proficiency_bonus(self) -> int:
        base_bonus = self.level // 4
        if self.level % 4 == 0:
            return base_bonus + 1
        else:
            return base_bonus + 2


class NonPlayableCharacter(Entity):
    challenge = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(34)]
    )
    legendary_creature = models.BooleanField(default=False)

    @property
    def proficiency_bonus(self) -> int:
        base_bonus = self.challenge // 4
        if self.challenge <= 8:
            return 2
        elif self.challenge % 4 == 0:
            return base_bonus
        else:
            return base_bonus + 1


class Inventory(Base):
    character = models.ForeignKey(
        "characters.PlayableCharacter", on_delete=models.CASCADE
    )

    # Coins
    cp = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    sp = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    ep = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    gp = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )
    pp = models.IntegerField(
        default=0, validators=[MinValueValidator(0)]
    )

    # Items
    armors = models.ManyToManyField(
        "actions.Armor", blank=True
    )
    gears = models.ManyToManyField(
        "actions.AdventureGear", blank=True
    )
    tools = models.ManyToManyField(
        "actions.Tool", blank=True
    )
    weapons = models.ManyToManyField(
        "actions.Weapon", blank=True
    )
