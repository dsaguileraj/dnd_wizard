from enum import Enum
from random import randint
from django.db import models
from equipment.models import Equipment
from spells.models import Spell

MODIFIERS = {
    -5: [1],
    -4: [2, 3],
    -3: [4, 5],
    -2: [6, 7],
    -1: [8, 9],
    0: [10, 11],
    1: [12, 13],
    2: [14, 15],
    3: [16, 17],
    4: [18, 19],
    5: [20, 21],
    6: [22, 23],
    7: [24, 25],
    8: [26, 27],
    9: [28, 29],
    10: [30],
}

m = 13

for i in MODIFIERS.values():
    if m in i:
        print(i)


class Race(models.Model):
    name = models.CharField(max_length=50)

    # Inherited Stat Bonus
    strength = models.PositiveSmallIntegerField(verbose_name='STR', validators=[
        models.MinValueValidator(0),
        models.MaxValueValidator(2)
    ])
    dexterity = models.PositiveSmallIntegerField(verbose_name='DEX', validators=[
        models.MinValueValidator(0),
        models.MaxValueValidator(2)
    ])
    constitution = models.PositiveSmallIntegerField(verbose_name='CON', validators=[
        models.MinValueValidator(0),
        models.MaxValueValidator(2)
    ])
    intelligence = models.PositiveSmallIntegerField(verbose_name='INT', validators=[
        models.MinValueValidator(0),
        models.MaxValueValidator(2)
    ])
    wisdom = models.PositiveSmallIntegerField(verbose_name='WIS', validators=[
        models.MinValueValidator(0),
        models.MaxValueValidator(2)
    ])
    charisma = models.PositiveSmallIntegerField(verbose_name='CHA', validators=[
        models.MinValueValidator(0),
        models.MaxValueValidator(2)
    ])

    is_playable = models.BooleanField()

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

    entity_class = models.ForeignKey(
        EntityClass, blank=True, on_delete=models.SET_NULL)
    experience = models.PositiveIntegerField(default=0)

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
    speed = models.PositiveSmallIntegerField(verbose_name='SPEED', validators=[
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
    # Strength
    def calculate_strength(self) -> int:
        return self.strength + self.race.strength

    strength = models.PositiveSmallIntegerField(verbose_name='STR', validators=[
        models.MinValueValidator(1),
        models.MaxValueValidator(30)
    ])
    calculated_strength = models.PositiveSmallIntegerField(
        editable=False, default=calculate_strength())
    
    def calculate_strength_bonus(self) -> int:
        pass

    strength_modifier = 0  # Update Later

    # Dexterity
    def calculate_dexterity(self) -> int:
        return self.dexterity + self.race.dexterity

    dexterity = models.PositiveSmallIntegerField(verbose_name='DEX', validators=[
        models.MinValueValidator(1),
        models.MaxValueValidator(30)
    ])
    calculated_dexterity = models.PositiveSmallIntegerField(
        editable=False, default=calculate_dexterity())
    dexterity_modifier = 0  # Update Later

    # Constitution
    def calculate_constitution(self) -> int:
        return self.constitution + self.race.constitution

    constitution = models.PositiveSmallIntegerField(verbose_name='CON', validators=[
        models.MinValueValidator(1),
        models.MaxValueValidator(30)
    ])
    calculated_constitution = models.PositiveSmallIntegerField(
        editable=False, default=calculate_constitution())
    constitution_modifier = 0  # Update Later

    # Intelligence
    def calculate_intelligence(self) -> int:
        return self.intelligence + self.race.intelligence

    intelligence = models.PositiveSmallIntegerField(verbose_name='INT', validators=[
        models.MinValueValidator(1),
        models.MaxValueValidator(30)
    ])
    calculated_intelligence = models.PositiveSmallIntegerField(
        editable=False, default=calculate_intelligence())
    intelligence_modifier = 0  # Update Later

    # Wisdom
    def calculate_wisdom(self) -> int:
        return self.wisdom + self.race.wisdom

    wisdom = models.PositiveSmallIntegerField(verbose_name='WIS', validators=[
        models.MinValueValidator(1),
        models.MaxValueValidator(30)
    ])
    calculated_wisdom = models.PositiveSmallIntegerField(
        editable=False, default=calculate_wisdom())
    wisdom_modifier = 0  # Update Later

    # Charisma
    def calculate_charisma(self):
        return self.charisma + self.race.charisma

    charisma = models.PositiveSmallIntegerField(verbose_name='CHA', validators=[
        models.MinValueValidator(1),
        models.MaxValueValidator(30)
    ])
    calculated_charisma = models.PositiveSmallIntegerField(
        editable=False, default=calculate_charisma())
    charisma_modifier = 0  # Update Later

    inspiration = models.BooleanField()

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

    def roll_dice(self, dices: int, sides: int, modifier: str) -> list:
        modifiers = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']
        throws = []
        for throw in range(dices):
            if modifier in modifiers:
                match modifier:
                    case 'STR':
                        throws.append(randint(1, sides) +
                                      self.strength_modifier)
                        return throws
                    case 'DEX':
                        throws.append(randint(1, sides) +
                                      self.dexterity_modifier)
                        return throws
                    case 'CON':
                        throws.append(randint(1, sides) +
                                      self.constitution_modifier)
                        return throws
                    case 'INT':
                        throws.append(randint(1, sides) +
                                      self.intelligence_modifier)
                        return throws
                    case 'WIS':
                        throws.append(randint(1, sides) + self.wisdom_modifier)
                        return throws
                    case 'CHA':
                        throws.append(randint(1, sides) +
                                      self.charisma_modifier)
                        return throws
                    case _:
                        throws.append(randint(1, sides))
                        return throws

    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True
