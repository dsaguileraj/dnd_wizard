from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from apps.core.models import Equipment


class AdventurerEquipment(Equipment):
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250
    )


class Armor(Equipment):
    armor_class = models.PositiveSmallIntegerField(
        verbose_name='CA'
    )
    dexterity_bonus = models.BooleanField(
        verbose_name='Bonificador de Destreza',
        default=False
    )
    min_strength = models.PositiveSmallIntegerField(
        verbose_name='FUE',
        default=0
    )
    disadvantage_stealth = models.BooleanField(
        verbose_name='Desventaja en Sigilo',
        default=False
    )


class Property(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        primary_key=True,
        max_length=50
    )

    def __str__(self) -> str:
        return self.name


class Spell(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50
    )
    entity_class = models.ManyToManyField(
        'characters.EntityClass',
        verbose_name='Clase'
    )
    SCHOOLS = {
        'Abjuración': 'Abjuración',
        'Adivinación': 'Adivinación',
        'Conjuración': 'Conjuración',
        'Encantamiento': 'Encantamiento',
        'Evocación': 'Evocación',
        'Ilusión': 'Ilusión',
        'Nigromancia': 'Nigromancia',
        'Transmutación': 'Transmutación'
    }
    magic_school = models.CharField(
        verbose_name='Escuela de Magia',
        max_length=13,
        choices=SCHOOLS
    )
    level = models.PositiveSmallIntegerField(
        verbose_name='Nivel',
        validators=[
            MaxValueValidator(9)
        ]
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250
    )

    # Componentes
    verbal = models.BooleanField(
        verbose_name='Verbal',
        default=False
    )
    somatic = models.BooleanField(
        verbose_name='Somático',
        default=False
    )
    material = models.BooleanField(
        verbose_name='Material',
        default=False
    )
    material_description = models.CharField(
        verbose_name='Materiales',
        max_length=250,
        blank=True
    )

    # Alcance
    spell_range = models.SmallIntegerField(
        verbose_name='Alcance',
        help_text='[-1]: Lanzador; [0]: Toque',
        validators=[
            MinValueValidator(-1)
        ]
    )

    TIME_MEASURE = {
        'Acción': 'Acción',
        'Minuto': 'Minuto',
        'Hora': 'Hora',
        'Día': 'Día',
    }

    # Tiempo de Lanzamiento
    launch_time = models.PositiveSmallIntegerField(
        verbose_name='Tiempo de Lanzamiento',
        help_text='[0]: Instantáneo',
        validators=[
            MinValueValidator(1)
        ]
    )
    launch_measure = models.CharField(
        verbose_name='Unidad de Tiempo (Tiempo de Lanzamiento)',
        max_length=6,
        choices=TIME_MEASURE
    )

    # Duración
    concentration = models.BooleanField(
        verbose_name='Concentración',
        default=False
    )
    duration = models.PositiveSmallIntegerField(
        verbose_name='Duración',
        help_text='[0]: Instantáneo'
    )
    duration_measure = models.CharField(
        verbose_name='Unidad de Tiempo (Duración)',
        max_length=6,
        choices=TIME_MEASURE
    )

    def __str__(self) -> str:
        return f'{self.name} - {self.magic_school} [{self.level}]'


class Tool(Equipment):
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250
    )


class Weapon(Equipment):
    DAMAGE_TYPES = {
        'Cortante': 'Cortante',
        'Contundente': ' Contundente',
        'Perforante': 'Perforante'
    }
    hit_dices = models.PositiveSmallIntegerField(
        verbose_name='Nº dados',
        default=1
    )
    dice_sides = models.PositiveSmallIntegerField(
        verbose_name='Nº caras',
        default=4
    )
    modifier = models.PositiveSmallIntegerField(
        verbose_name='Modificador',
        default=0
    )
    damage_type = models.CharField(
        verbose_name='Tipo de Daño',
        max_length=11,
        choices=DAMAGE_TYPES
    )
    property = models.ManyToManyField(
        Property,
        verbose_name='Propiedad',
        blank=True
    )
