from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core import choices
from apps.core.models import BaseModel, DescriptionModel, PersonalCharacteristic


class Background(BaseModel):
    skills = models.ManyToManyField(
        'traits.Skill',
        verbose_name='Habilidades',
        max_length=2
    )
    
    # Traits Choices
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

    class Meta:
        ordering = ["name"]


class Bond(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"


class Feature(DescriptionModel):
    class Meta:
        ordering = ["name"]


class DamageImmunity(DescriptionModel):
    class Meta:
        ordering = ["name"]


class DamageResistence(DescriptionModel):
    class Meta:
        ordering = ["name"]


class DamageVulnerability(DescriptionModel):
    class Meta:
        ordering = ["name"]


class Flaw(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"


class Ideal(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"


class Language(BaseModel):
    class Meta:
        ordering = ["name"]


class Personality(PersonalCharacteristic):
    class Meta:
        order_with_respect_to = "background"


class SavingThrow(models.Model):
    stat = models.CharField(
        verbose_name='Estadística',
        max_length=3,
        unique=True,
        choices=choices.Stats
    )

    def __str__(self) -> str:
        return self.stat

    class Meta:
        ordering = ["stat"]


class Skill(BaseModel):
    modifier = models.CharField(
        verbose_name='Estadística',
        max_length=3,
        choices=choices.Stats
    )

    class Meta:
        ordering = ["name"]


class StateImmunity(DescriptionModel):
    class Meta:
        ordering = ["name"]