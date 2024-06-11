from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator
from django.db import models
from apps.core.models import AbstractEntity


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
            MaxValueValidator(20)
        ]
    )
    proficiencies = models.ManyToManyField(
        'traits.Proficiency',
        verbose_name='Competencias'
    )

    def __str__(self) -> str:
        return self.name


class Monster(AbstractEntity):
    CHALLENGE_CHOICES = {
        0: '0',
        1/8: '1/8',
        1/4: '1/4',
        1/2: '1/2',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
        26: '26',
        27: '27',
        28: '28',
        29: '29',
        30: '30'
    }
    challenge = models.DecimalField(
        max_digits=5,
        decimal_places=3,
        verbose_name='Desafío',
        choices=CHALLENGE_CHOICES
    )

    def calculate_proficiency_bonus(self) -> int:
        if self.challenge < 1:
            return 2
        if self.challenge % 4 == 0:
            return self.challenge // 4 + 1
        else:
            return self.challenge // 4 + 2

    proficiency_bonus = models.PositiveSmallIntegerField(
        verbose_name='Bonificador por Competencia',
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
        blank=True
    )
    features = models.ManyToManyField(
        'traits.Feature',
        verbose_name='Rasgos',
        blank=True
    )
    SIZE_CHOICES = {
        'XS': 'Diminuto',
        'S': 'Pequeño',
        'M': 'Mediano',
        'L': 'Grande',
        'XL': 'Enorme',
        'XXL': 'Gigante'
    }
    size = models.CharField(
        verbose_name='Tamaño',
        max_length=3,
        choices=SIZE_CHOICES
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
