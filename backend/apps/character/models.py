from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.models import Entity
from dnd_wizard.utils import LEVELS


class PlayableCharacter(Entity):
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    experience = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(355000)]
    )

    # Equipment
    l_hand = models.ForeignKey(
        "action.Weapon", on_delete=models.SET_NULL, null=True, default=None, related_name='playable_l_hand'
    )
    r_hand = models.ForeignKey(
        "action.Weapon", on_delete=models.SET_NULL, null=True, default=None, related_name='playable_r_hand'
    )

    @property
    def level(self) -> int:
        """Calculate the PC level based on her experience points.

        Returns:
            int: Level
        """
        base_level = 0
        for lvl, exp_required in LEVELS.items():
            if self.experience >= exp_required:
                base_level = lvl
            else:
                break
        return base_level

    @property
    def proficiency_bonus(self) -> int:
        """Calculate the proficiency bonus to apply when roll dice based on PC level.

        Returns:
            int: Proficiency bonus
        """
        base_bonus = self.level // 4
        if self.level % 4 == 0:
            return base_bonus + 1
        else:
            return base_bonus + 2


class NonPlayableCharacter(Entity):
    challenge = models.IntegerField(
        default=1, validators=[MinValueValidator(1), MaxValueValidator(34)]
    )

    # Equipment
    l_hand = models.ForeignKey(
        "action.Weapon", on_delete=models.SET_NULL, null=True, default=None, related_name='non_playable_l_hand'
    )
    r_hand = models.ForeignKey(
        "action.Weapon", on_delete=models.SET_NULL, null=True, default=None, related_name='non_playable_r_hand'
    )

    @property
    def proficiency_bonus(self) -> int:
        """Calculate the proficiency bonus to apply when roll dice based on NPC challenge level.

        Returns:
            int: Proficiency bonus
        """
        base_bonus = self.challenge // 4
        if self.challenge <= 8:
            return 2
        elif self.challenge % 4 == 0:
            return base_bonus
        else:
            return base_bonus + 1
