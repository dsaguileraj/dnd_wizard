from django.db import models


class Background(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        primary_key=True,
        max_length=50
    )
    proficiencies = models.ManyToManyField(
        'traits.Proficiency',
        verbose_name='Competencias',
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


class Proficiency(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
    )
    description = models.CharField(
        verbose_name='Descripción',
        max_length=250,
        unique=True
    )

    def __str__(self) -> str:
        return self.name


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
