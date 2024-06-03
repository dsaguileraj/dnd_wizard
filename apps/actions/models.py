from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Spell(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_spell',
        max_length=50
    )
    entity_class = models.ManyToManyField(
        'characters.EntityClass',
        verbose_name='Clase',
        name='class_spell'
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
        name='level_spell',
        validators=[
            MaxValueValidator(9)
        ]
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_spell',
        max_length=1250
    )

    # Componentes
    verbal = models.BooleanField(
        verbose_name='Verbal'
    )
    somatic = models.BooleanField(
        verbose_name='Somático'
    )
    material = models.BooleanField(
        verbose_name='Material'
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
        verbose_name='Concentración'
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


class Equipment(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_equipment',
        max_length=50,
        unique=True
    )
    category = models.CharField(
        verbose_name='Categoría',
        name='category_equipment',
        max_length=50,
        blank=True
    )

    # Price
    COINS = {
        'pc': 'Cobre',
        'pp': 'Plata',
        'pe': 'Electro',
        'po': 'Oro',
        'ppt': 'Platino'
    }
    price = models.PositiveBigIntegerField(
        verbose_name='Precio'
    )
    coin = models.CharField(
        verbose_name='Moneda',
        max_length=3,
        choices=COINS
    )
    weight = models.PositiveSmallIntegerField(
        verbose_name='Peso (lb)',
        name='weight_equipment'
    )

    def __str__(self) -> str:
        return {self.name}

    class Meta:
        abstract = True


class Armor(Equipment):
    armor_class = models.PositiveSmallIntegerField(
        verbose_name='CA'
    )
    dexterity_bonus = models.BooleanField(
        verbose_name='Bonificador de Destreza'
    )
    min_strength = models.PositiveSmallIntegerField(
        verbose_name='FUE'
    )
    disadvantage_stealth = models.BooleanField(
        verbose_name='Desventaja en Sigilo'
    )


class Property(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_property',
        max_length=50
    )

    def __str__(self) -> str:
        return self.name


class Weapon(Equipment):
    DAMAGE_TYPES = {
        'Cortante': 'Cortante',
        'Contundente': ' Contundente',
        'Perforante': 'Perforante'
    }
    hit_dice = models.PositiveSmallIntegerField(
        verbose_name='Dado de Golpe',
        name='hit_dice_weapon',
        blank=True
    )
    multiplier = models.PositiveSmallIntegerField(
        verbose_name='Multiplicador',
        validators=[
            MinValueValidator(1)
        ]
    )
    damage_type = models.CharField(
        verbose_name='Tipo de Daño',
        max_length=11,
        choices=DAMAGE_TYPES
    )
    property = models.ManyToManyField(
        Property,
        verbose_name='Propiedad'
    )


class AdventurerEquipment(Equipment):
    description = models.CharField(
        verbose_name='Descripción',
        name='description_adventure_equipment',
        max_length=1250
    )


class Tool(Equipment):
    description = models.CharField(
        verbose_name='Descripción',
        name='description_tool',
        max_length=1250
    )
