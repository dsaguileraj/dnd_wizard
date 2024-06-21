from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.models import Entity


class PlayableCharacter(Entity):
    player = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.SET_NULL,
        null=True
    )
    entity_class = models.ForeignKey(
        'traits.EntityClass',
        on_delete=models.SET_NULL,
        null=True
    )
    inspiration = models.BooleanField(
        default=False
    )

    def calculate_level(self) -> int:
        LEVELS = {
            1: 0,
            2: 300,
            3: 900,
            4: 2700,
            5: 6500,
            6: 14000,
            7: 23000,
            8: 34000,
            9: 48000,
            10: 64000,
            11: 85000,
            12: 100000,
            13: 120000,
            14: 140000,
            15: 165000,
            16: 195000,
            17: 225000,
            18: 265000,
            19: 305000,
            20: 355000
        }
        level = 0
        for points in LEVELS.values():
            if self.experience >= points:
                level += 1
            else:
                return level
    experience = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    level = models.IntegerField(
        default=calculate_level,
        editable=False
    )

    def calculate_proficiency_bonus(self) -> int:
        if self.level % 4 == 0:
            return self.level // 4 + 1
        else:
            return self.level // 4 + 2
    proficiency_bonus = models.IntegerField(
        default=calculate_proficiency_bonus,
        editable=False
    )

    # Traits
    languages = models.ManyToManyField(
        'rules.Language',
    )
    skills = models.ManyToManyField(
        'rules.Skill',
    )
    armor_proficiencies = models.ManyToManyField(
        'actions.Armor',
        related_name='proficient_characters',
    )
    weapon_proficiencies = models.ManyToManyField(
        'actions.Weapon',
        related_name='proficient_characters',
    )
    tool_proficiencies = models.ManyToManyField(
        'actions.Tool',
        related_name='proficient_characters',
    )

    class Meta:
        ordering = ["name"]


class NonPlayableCharacter(Entity):
    def calculate_proficiency_bonus(self) -> int:
        if self.challenge <= 8:
            return 2
        elif self.challenge % 4 == 0:
            return self.challenge // 4
        else:
            return self.challenge // 4 + 1
    challenge = models.IntegerField(
        validators=[
            MaxValueValidator(34),
            MinValueValidator(1)
        ]
    )
    proficiency_bonus = models.IntegerField(
        default=calculate_proficiency_bonus,
        editable=False
    )

    class Meta:
        ordering = ["name"]
