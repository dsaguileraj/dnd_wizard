from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from apps.core.choices import Stats
from apps.core.models import BaseModel, PersonalCharacteristic


class Background(BaseModel):
    language_choices = models.SmallIntegerField(
        verbose_name='Idiomas a elección',
        validators=[
            MaxValueValidator(2)
        ]
    )
    max_tool_proficiencies_choices = models.SmallIntegerField(
        verbose_name='Competencia con Herramientas Disponibles',
        validators=[
            MaxValueValidator(2),
            MinValueValidator(1)
        ]
    )
    tool_proficiencies_choices = models.ManyToManyField(
        'actions.Tool',
        verbose_name='Lista de Competencia con Herramientas Disponibles',
    )
    skills = models.ManyToManyField(
        'traits.Skill',
        verbose_name='Habilidades',
        max_length=2
    )

    class Meta:
        ordering = ["name"]


class Bond(PersonalCharacteristic):
    ...


class Feature(BaseModel):
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250,
        unique=True
    )


class Flaw(PersonalCharacteristic):
    ...


class Ideal(PersonalCharacteristic):
    ...


class Language(BaseModel):
    ...

    class Meta:
        ordering = ["name"]


class Personality(PersonalCharacteristic):
    ...


class SavingThrow(models.Model):
    stat = models.CharField(
        verbose_name='Estadística',
        max_length=3,
        unique=True,
        choices=Stats
    )

    def __str__(self) -> str:
        return self.stat


class Skill(BaseModel):
    modifier = models.CharField(
        verbose_name='Estadística',
        max_length=3,
        choices=Stats
    )

    class Meta:
        ordering = ["name"]
