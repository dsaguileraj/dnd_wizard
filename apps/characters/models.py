from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.models import Entity
from dnd_wizard.utils import LEVELS


class PlayableCharacter(Entity):
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    experience = models.PositiveSmallIntegerField(default=0)
    inspiration = models.BooleanField(default=False)

    # Traits
    entity_class = models.ForeignKey(
        "traits.EntityClass", on_delete=models.SET_NULL, null=True, default=None
    )
    background = models.ForeignKey(
        "traits.Background", on_delete=models.SET_NULL, null=True, default=None
    )

    # Inventory
    adventure_gears = models.ManyToManyField(
        "actions.AdventureGear", blank=True
    )
    armor = models.ManyToManyField("actions.Armor", blank=True)
    spells = models.ManyToManyField("actions.Spell", blank=True)
    tools = models.ManyToManyField("actions.Tool", blank=True)
    trinkets = models.ManyToManyField("actions.Trinket", blank=True)

    # Coins
    copper = models.PositiveSmallIntegerField(default=0)
    silver = models.PositiveSmallIntegerField(default=0)
    electrum = models.PositiveSmallIntegerField(default=0)
    gold = models.PositiveSmallIntegerField(default=0)
    platinum = models.PositiveSmallIntegerField(default=0)

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
    challenge = models.PositiveSmallIntegerField(
        default=1, validators=[MaxValueValidator(34), MinValueValidator(1)]
    )
    legendary_creature = models.BooleanField(default=False)
    armor = models.ForeignKey(
        "actions.Armor", related_name="init_armor", on_delete=models.SET_NULL, blank=True, null=True, default=None
    )
    spells = models.ManyToManyField("actions.Spell", blank=True)

    @property
    def proficiency_bonus(self) -> int:
        base_bonus = self.challenge // 4
        if self.challenge <= 8:
            return 2
        elif self.challenge % 4 == 0:
            return base_bonus
        else:
            return base_bonus + 1
