from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from apps.core.models import Equipment, MEASURING_UNITS


class AdventurerEquipment(Equipment):
    CATEGORIES = {
        'Canalizadores Arcanos': 'Canalizadores Arcanos',
        'Canalizadores Druídicos': 'Canalizadores Druídicos',
        'Mercancías': 'Mercancías',
        'Munición': 'Munición',
        'Símbolos Sagrados': 'Símbolos Sagrados',
    }
    category = models.CharField(
        verbose_name='Categoría',
        max_length=23,
        null=True,
        default=None,
        choices=CATEGORIES
    )
    measuring_unit = models.CharField(
        verbose_name='Magnitud (Medida)',
        max_length=4,
        null=True,
        default=None,
        choices=MEASURING_UNITS
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250,
        blank=True
    )


class Armor(Equipment):
    CATEGORIES = {
        'Armaduras Ligeras': 'Armaduras Ligeras',
        'Armaduras Medianas': 'Armaduras Medianas',
        'Armaduras Pesadas': 'Armaduras Pesadas',
        'Escudos': 'Escudos'
    }
    category = models.CharField(
        verbose_name='Categoría',
        max_length=18,
        choices=CATEGORIES
    )
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
        max_length=50,
        unique=True
    )

    def __str__(self) -> str:
        return self.name


class Spell(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
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
        verbose_name='Alcance (Casillas)',
        help_text='[-1]: Lanzador; [0]: Toque',
        validators=[
            MinValueValidator(-1)
        ]
    )
    # Tiempo de Lanzamiento
    launch_time = models.PositiveSmallIntegerField(
        verbose_name='Tiempo de Lanzamiento',
        default=0
    )
    launch_measure = models.CharField(
        verbose_name='Unidad de Tiempo (Tiempo de Lanzamiento)',
        max_length=6,
        choices=MEASURING_UNITS['Tiempo']
    )

    # Duración
    concentration = models.BooleanField(
        verbose_name='Concentración',
        default=False
    )
    duration = models.PositiveSmallIntegerField(
        verbose_name='Duración',
        default=0
    )
    duration_measure = models.CharField(
        verbose_name='Unidad de Tiempo (Duración)',
        max_length=3,
        choices=MEASURING_UNITS['Tiempo']
    )

    def __str__(self) -> str:
        return f'{self.name} - {self.magic_school} [{self.level}]'


class Tool(Equipment):
    CATEGORIES = {
        'Herramientas de Artesano': 'Herramienta de Artesano',
        'Instrumentos Musicales': 'Instrumentos Musicales',
        'Juegos': 'Juegos'
    }
    category = models.CharField(
        verbose_name='Categoría',
        max_length=24,
        null=True,
        default=None,
        choices=CATEGORIES
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250
    )


class Trinket(models.Model):
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250
    )


class Weapon(Equipment):
    CATEGORIES = {
        'Armas cuerpo a cuerpo sencillas': 'Armas cuerpo a cuerpo sencillas',
        'Armas a distancia sencillas': 'Armas a distancia sencillas',
        'Armas cuerpo a cuerpo marciales': 'Armas cuerpo a cuerpo marciales',
        'Armas a distancia marciales': 'Armas a distancia marciales'
    }
    category = models.CharField(
        verbose_name='Categoría',
        max_length=31,
        choices=CATEGORIES
    )
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
    DAMAGE_TYPES = {
        'Contundente': ' Contundente',
        'Cortante': 'Cortante',
        'Perforante': 'Perforante'
    }
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
