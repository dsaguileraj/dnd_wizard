from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from apps.core.choices import Stats


class Background(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
    )
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

    def __str__(self) -> str:
        return self.name


class Bond(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE,
        verbose_name='Trasfondo',
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250,
        unique=True
    )

    def __str__(self) -> str:
        return f'{self.background}: Bond ({self.pk})'


class Feature(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        primary_key=True,
        max_length=50
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250,
        unique=True
    )

    def __str__(self) -> str:
        return self.name


class Flaw(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE,
        verbose_name='Trasfondo',
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250,
        unique=True
    )

    def __str__(self) -> str:
        return f'{self.background}: Flaw ({self.pk})'


class Ideal(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE,
        verbose_name='Trasfondo',
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250,
        unique=True
    )

    def __str__(self) -> str:
        return f'{self.background}: Ideal ({self.pk})'


class Language(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        primary_key=True,
        max_length=50
    )

    def __str__(self) -> str:
        return self.name


class Personality(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE,
        verbose_name='Trasfondo',
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250,
        unique=True
    )

    def __str__(self) -> str:
        return f'{self.background}: Personality ({self.pk})'


class SavingThrow(models.Model):
    stat = models.CharField(
        verbose_name='Estadística',
        max_length=3,
        unique=True,
        choices=Stats
    )

    def __str__(self) -> str:
        return self.stat


class Skill(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
    )
    modifier = models.CharField(
        verbose_name='Estadística',
        max_length=3,
        choices=Stats
    )

    def __str__(self) -> str:
        return self.name
