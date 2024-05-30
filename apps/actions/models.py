from django.db import models
from django.core.validators import MaxValueValidator


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
    # Tipo
    # Tiempo de Lanzamiento
    # Componentes
    # Alcance
    # Área
    # Duración


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
        null=True
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
        verbose_name='Peso (gr)',
        name='weight_equipment'
    )

    class Meta:
        abstract = True
