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
    level = models.PositiveSmallIntegerField(
        verbose_name='Nivel',
        name='level_spell',
        validators=[
            MinValueValidator(0),
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
    class Meta:
        abstract = True