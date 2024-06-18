from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core.models import AbstractEntity
from apps.core import choices


class Character(AbstractEntity):
    player = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Jugador'
    )
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.SET_NULL,
        verbose_name='Trasfondo',
        null=True
    )
    entity_class = models.ForeignKey(
        'characters.EntityClass',
        on_delete=models.SET_NULL,
        verbose_name='Clase',
        null=True
    )
    inspiration = models.BooleanField(
        verbose_name='Inspiración',
        default=False
    )
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

    def calculate_level(self) -> int:
        level = 0
        for points in self.LEVELS.values():
            if self.experience >= points:
                level += 1
            else:
                return level

    experience = models.PositiveIntegerField(
        verbose_name='Experiencia',
        default=0
    )
    level = models.PositiveSmallIntegerField(
        verbose_name='Nivel',
        default=calculate_level,
        editable=False
    )

    def calculate_proficiency_bonus(self) -> int:
        if self.level % 4 == 0:
            return self.level // 4 + 1
        else:
            return self.level // 4 + 2

    proficiency_bonus = models.PositiveSmallIntegerField(
        verbose_name='Bonificador por Competencia',
        default=calculate_proficiency_bonus,
        editable=False
    )
    armor_proficiencies = models.ManyToManyField(
        'actions.Armor',
        related_name='proficient_characters',
        verbose_name='Competencias con Armaduras',
        blank=True
    )
    weapon_proficiencies = models.ManyToManyField(
        'actions.Weapon',
        related_name='proficient_characters',
        verbose_name='Competencias con Armas',
        blank=True
    )
    tool_proficiencies = models.ManyToManyField(
        'actions.Tool',
        related_name='proficient_characters',
        verbose_name='Competencias con Herramientas',
        blank=True
    )

    def save(self, *args, **kwargs) -> None:
        if self.race:
            self.languages.add(*self.race.languages.all())
            self.features.add(*self.race.features.all())
        if self.entity_class:
            self.proficiencies.add(*self.entity_class.proficiencies.all())
        super().save(*args, **kwargs)


class EntityClass(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
    )
    hit_dice = models.PositiveSmallIntegerField(
        verbose_name='Dado de Golpe',
        validators=[
            MaxValueValidator(20),
            MinValueValidator(4)
        ]
    )
    armor_proficiencies = models.ManyToManyField(
        'actions.Armor',
        verbose_name='Competencias con Armaduras',
    )
    weapon_proficiencies = models.ManyToManyField(
        'actions.Weapon',
        verbose_name='Competencias con Armas',
    )
    max_tool_proficiencies_choices = models.PositiveSmallIntegerField(
        verbose_name='Competencia con Herramientas Disponibles',
        validators=[
            MaxValueValidator(3)
        ]
    )
    tool_proficiencies_choices = models.ManyToManyField(
        'actions.Tool',
        verbose_name='Lista de Competencias con Herramientas Disponibles',
        blank=True
    )
    saving_throws = models.ManyToManyField(
        'traits.SavingThrow',
        verbose_name='Tiradas de Salvación',
        max_length=2
    )
    max_skill_choices = models.PositiveSmallIntegerField(
        verbose_name='Habilidades Disponibles',
        validators=[
            MaxValueValidator(3),
            MinValueValidator(1)
        ]
    )
    skill_choices = models.ManyToManyField(
        'traits.SKill',
        verbose_name='Lista de Habilidades Disponibles',
    )

    def __str__(self) -> str:
        return self.name


class Monster(AbstractEntity):
    challenge = models.PositiveSmallIntegerField(
        verbose_name='Nivel de Desafío',
        validators=[
            MaxValueValidator(34),
            MinValueValidator(1)
        ]
    )

    def calculate_proficiency_bonus(self) -> int:
        if self.challenge <= 8:
            return 2
        if self.challenge % 4 == 0:
            return self.challenge // 4
        else:
            return self.challenge // 4 + 1

    proficiency_bonus = models.PositiveSmallIntegerField(
        verbose_name='Bonificador de Competencia',
        default=calculate_proficiency_bonus,
        editable=False
    )


class Race(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
    )
    is_playable = models.BooleanField(
        verbose_name='¿Jugable?',
        default=False
    )
    languages = models.ManyToManyField(
        'traits.Language',
        verbose_name='Idiomas',
        max_length=2,
        blank=True
    )
    features = models.ManyToManyField(
        'traits.Feature',
        verbose_name='Rasgos',
        blank=True
    )
    size = models.CharField(
        verbose_name='Tamaño',
        max_length=3,
        choices=choices.Sizes
    )
    speed = models.PositiveSmallIntegerField(
        verbose_name='Velocidad'
    )
    # Inherited Stat Bonus
    strength = models.PositiveSmallIntegerField(
        verbose_name='FUE Heredada',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    dexterity = models.PositiveSmallIntegerField(
        verbose_name='DES Heredada',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    constitution = models.PositiveSmallIntegerField(
        verbose_name='CON Heredada',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    intelligence = models.PositiveSmallIntegerField(
        verbose_name='INT Heredada',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    wisdom = models.PositiveSmallIntegerField(
        verbose_name='SAB Heredada',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    charisma = models.PositiveSmallIntegerField(
        verbose_name='CAR Heredada',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )

    def __str__(self) -> str:
        return self.name
