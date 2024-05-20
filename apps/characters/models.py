from django.db import models
from equipment.models import Equipment
from spells.models import Spell


class Race(models.Model):
    pass


class Class(models.Model):
    pass


class Background(models.Model):
    pass


class Language(models.Model):
    name = models.CharField(max_length=30)


class Aligment(models.Model):
    pass


class Attributes(models.Model):
    pass


class Skills(models.Model):
    pass


class AbstractEntity(models.Model):
    name = models.CharField(max_length=30)

    # Stats
    strength = models.IntegerField(verbose_name='STR', validators=[
        models.MaxValueValidator(30),
        models.MinValueValidator(1)
    ])
    dexterity = models.IntegerField(verbose_name='DEX', validators=[
        models.MaxValueValidator(30),
        models.MinValueValidator(1)
    ])
    constitution = models.IntegerField(verbose_name='CON', validators=[
        models.MaxValueValidator(30),
        models.MinValueValidator(1)
    ])
    intelligence = models.IntegerField(verbose_name='INT', validators=[
        models.MaxValueValidator(30),
        models.MinValueValidator(1)
    ])
    wisdom = models.IntegerField(verbose_name='WIS', validators=[
        models.MaxValueValidator(30),
        models.MinValueValidator(1)
    ])
    charisma = models.IntegerField(verbose_name='CHA', validators=[
        models.MaxValueValidator(30),
        models.MinValueValidator(1)
    ])
    speed = models.IntegerField(verbose_name='SPEED', validators=[
        models.MinValueValidator(0)
    ])

    #
    languages = models.ManyToManyField(Language)

    # Actions
    equipment = models.ManyToManyField(Equipment)
    spells = models.ManyToManyField(Spell)
        