from django.db import models
from equipment.models import Equipment
from spells.models import Spell


class Race(models.Model):
    name = models.CharField(max_length=50)
    # ...

    def __str__(self) -> str:
        return self.name
    

class EntityClass(models.Model):
    name = models.CharField(max_length=50)
    # ...
    
    def __str__(self) -> str:
        return self.name


class Background(models.Model):
    name = models.CharField(max_length=50)
    # personality
    # ideals
    # bonds
    # flaws
    def __str__(self) -> str:
        return self.name
    

class Language(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class Proficiency(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    
    def __str__(self) -> str:
        return self.name


class Feature(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name


class Trait(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)

    def __str__(self) -> str:
        return self.name    


class AbstractEntity(models.Model):
    name = models.CharField(max_length=30)

    entity_class = models.ForeignKey(EntityClass, on_delete=models.SET_NULL)
    race = models.ForeignKey(Race, on_delete=models.SET_NULL)
    SIZE_CHOICES = {
        'XS': 'Diminuto',
        'S': 'Pequeño',
        'M': 'Mediano',
        'L': 'Grande',
        'XL': 'Enorme',
        'XXL': 'Gigante'
    }
    size = models.CharField(max_length=3, choices=SIZE_CHOICES)
    speed = models.IntegerField(verbose_name='SPEED', validators=[
        models.MinValueValidator(0)
    ])

    # Aligment
    ALIGMENT_CHOICES = {
        'LB': 'Legal Bueno',
        'LN': 'Legal Neutro',
        'LM': 'Legal Malvado',
        'NB': 'Neutral Bueno',
        'NN': 'Neutral',
        'NM': 'Neutral Malvado',
        'CB': 'Caótico Bueno',
        'CN': 'Caótico Neutro',
        'CM': 'Caótico Malvado'
    }
    aligment = models.CharField(max_length=2, choices=ALIGMENT_CHOICES)
    background = models.ForeignKey(Background, on_delete=models.SET_NULL)

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

    # Saving Throws
    st_strength = models.BooleanField(verbose_name='STR Saving Throw')
    st_dexterity = models.BooleanField(verbose_name='DEX Saving Throw')
    st_constitution = models.BooleanField(verbose_name='CON Saving Throw')
    st_intelligence = models.BooleanField(verbose_name='INT Saving Throw')
    st_wisdom = models.BooleanField(verbose_name='WIS Saving Throw')
    st_charisma = models.BooleanField(verbose_name='CHA Saving Throw')

    # Skills
    acrobatics = models.BooleanField()
    animal_handling = models.BooleanField()
    arcana = models.BooleanField()
    athletics = models.BooleanField()
    deception = models.BooleanField()
    history = models.BooleanField()
    insight = models.BooleanField()
    intimidation = models.BooleanField()
    investigation = models.BooleanField()
    medicine = models.BooleanField()
    nature = models.BooleanField()
    perception = models.BooleanField()
    performance = models.BooleanField()
    persuasion = models.BooleanField()
    religion = models.BooleanField()
    sleigth_of_hand = models.BooleanField()
    stealth = models.BooleanField()
    survival = models.BooleanField()

    # Special Attributes
    languages = models.ManyToManyField(Language)
    proficiencies = models.ManyToManyField(Proficiency)
    features = models.ManyToManyField(Feature)
    traits = models.ManyToManyField(Trait)

    # Actions
    equipment = models.ManyToManyField(Equipment)
    spells = models.ManyToManyField(Spell)
    
    def __str__(self) -> str:
        return self.name
