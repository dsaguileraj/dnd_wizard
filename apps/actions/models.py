from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from apps.core import choices
from apps.core.models import BaseModel, Item


class AdventureGear(Item):
    category = models.CharField(
        verbose_name='Categoría',
        max_length=20,
        null=True,
        default=None,
        choices=choices.CategoryEquipment
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250,
        blank=True
    )

    class Meta:
        ordering = ["category", "name"]

class Armor(Item):
    category = models.CharField(
        verbose_name='Categoría',
        max_length=7,
        choices=choices.CategoryArmor
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

    class Meta:
        ordering = ["category", "name"]

class Property(BaseModel):
    ...

    class Meta:
        ordering = ["name"]

class Spell(BaseModel):
    entity_class = models.ManyToManyField(
        'characters.EntityClass',
        verbose_name='Clase'
    )
    magic_school = models.CharField(
        verbose_name='Escuela de Magia',
        max_length=13,
        choices=choices.MagicSchools
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
    launch_time = models.SmallIntegerField(
        verbose_name='Tiempo de Lanzamiento',
        help_text='[-1]: Reacción',
        validators=[
            MinValueValidator(-1)
        ]
    )
    launch_measure = models.CharField(
        verbose_name='Unidad de Tiempo (Tiempo de Lanzamiento)',
        max_length=6,
        choices=choices.MeasureTime
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
        choices=choices.MeasureTime
    )

    def __str__(self) -> str:
        return f'{self.name} - {self.magic_school} [{self.level}]'
    
    class Meta:
        ordering = ["name"]

class Tool(Item):
    category = models.CharField(
        verbose_name='Categoría',
        max_length=23,
        null=True,
        default=None,
        choices=choices.CategoryTool
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250,
        blank=True
    )
    
    class Meta:
        ordering = ["category", "name"]


class Trinket(models.Model):
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250
    )


class Weapon(Item):
    category = models.CharField(
        verbose_name='Categoría',
        max_length=24,
        choices=choices.CategoryWeapon
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
    damage_type = models.CharField(
        verbose_name='Tipo de Daño',
        max_length=11,
        choices=choices.DamageTypes
    )
    property = models.ManyToManyField(
        Property,
        verbose_name='Propiedad',
        blank=True
    )
    
    class Meta:
        ordering = ["category", "name"]