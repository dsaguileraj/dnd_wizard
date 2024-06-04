from django.db import models


class Background(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_background',
        primary_key=True,
        max_length=50
    )
    proficiencies = models.ManyToManyField(
        'traits.Proficiency',
        verbose_name='Competencias',
        name='proficiencies_background'
    )

    def __str__(self) -> str:
        return self.name


class Bond(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE,
        verbose_name='Trasfondo',
        name='background_bond'
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_bond',
        max_length=250,
        unique=True
    )


class Ideal(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE,
        verbose_name='Trasfondo',
        name='background_ideal'
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_ideal',
        max_length=250,
        unique=True
    )


class Language(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_language',
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
        name='background_personality'
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_personality',
        max_length=250,
        unique=True
    )


class Proficiency(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_proficiency',
        max_length=50,
        unique=True
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_proficiency',
        max_length=250,
        unique=True
    )

    def __str__(self) -> str:
        return self.name


class Feature(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_feature',
        primary_key=True,
        max_length=50
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_feature',
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
        name='background_flaw'
    )
    description = models.CharField(
        verbose_name='Descripción',
        name='description_flaw',
        max_length=250,
        unique=True
    )
