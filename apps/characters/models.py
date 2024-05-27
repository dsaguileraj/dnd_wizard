from random import randint
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from apps.equipment.models import Equipment
from apps.spells.models import Spell


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


class Background(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


# Background
class Personality(models.Model):
    background = models.ForeignKey(Background, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)


# Background
class Ideal(models.Model):
    background = models.ForeignKey(Background, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)


# Background
class Bond(models.Model):
    background = models.ForeignKey(Background, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)


# Background
class Flaw(models.Model):
    background = models.ForeignKey(Background, on_delete=models.CASCADE)
    description = models.CharField(max_length=255)


class Race(models.Model):
    name = models.CharField(max_length=50)

    # Inherited Stat Bonus
    strength = models.PositiveSmallIntegerField(verbose_name='STR', validators=[
        MinValueValidator(0),
        MaxValueValidator(2)
    ])
    dexterity = models.PositiveSmallIntegerField(verbose_name='DEX', validators=[
        MinValueValidator(0),
        MaxValueValidator(2)
    ])
    constitution = models.PositiveSmallIntegerField(verbose_name='CON', validators=[
        MinValueValidator(0),
        MaxValueValidator(2)
    ])
    intelligence = models.PositiveSmallIntegerField(verbose_name='INT', validators=[
        MinValueValidator(0),
        MaxValueValidator(2)
    ])
    wisdom = models.PositiveSmallIntegerField(verbose_name='WIS', validators=[
        MinValueValidator(0),
        MaxValueValidator(2)
    ])
    charisma = models.PositiveSmallIntegerField(verbose_name='CHA', validators=[
        MinValueValidator(0),
        MaxValueValidator(2)
    ])

    SIZE_CHOICES = {
        'XS': 'Diminuto',
        'S': 'Pequeño',
        'M': 'Mediano',
        'L': 'Grande',
        'XL': 'Enorme',
        'XXL': 'Gigante'
    }
    size = models.CharField(max_length=3, choices=SIZE_CHOICES)
    speed = models.PositiveSmallIntegerField(
        verbose_name='SPEED', validators=[MinValueValidator(0)])

    languages = models.ManyToManyField(Language)
    proficiencies = models.ManyToManyField(Proficiency)
    features = models.ManyToManyField(Feature)
    traits = models.ManyToManyField(Trait)

    is_playable = models.BooleanField()

    def __str__(self) -> str:
        return self.name


class EntityClass(models.Model):
    name = models.CharField(max_length=50)
    hit_dice = models.PositiveSmallIntegerField(validators=[
        MinValueValidator(3),
        MaxValueValidator(20)
    ])

    proficiencies = models.ManyToManyField(Proficiency)

    # ...

    def __str__(self) -> str:
        return self.name


class AbstractEntity(models.Model):
    name = models.CharField(max_length=30)

    entity_class = models.ForeignKey(
        EntityClass, blank=True, on_delete=models.SET_NULL)

    LEVELS = {
        1: 0,
        2: 300,
        3: 900,
        4: 2700,
        5: 6500,
        6: 14000,
        7: 23000,
        8: 34000,
        9: 48000,
        10: 64000,
        11: 85000,
        12: 100000,
        13: 120000,
        14: 140000,
        15: 165000,
        16: 195000,
        17: 225000,
        18: 265000,
        19: 305000,
        20: 355000
    }

    def calculate_level(self) -> int:
        level = 0
        for points in self.LEVELS.values():
            if self.experience >= points:
                level += 1
            else:
                return level

    experience = models.PositiveIntegerField(default=0)
    level = models.PositiveSmallIntegerField(
        editable=False, default=calculate_level)

    race = models.ForeignKey(Race, on_delete=models.SET_NULL)

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
    background = models.ForeignKey(
        Background, blank=True, on_delete=models.SET_NULL)

    # Stats

    def calculate_modifier(stat: int) -> int:
        base_bonus = -5
        if stat < 30:
            if stat % 2 == 0:
                stat += 1
            for modifier in range(1, 30, 2):
                if stat == modifier:
                    return base_bonus
                base_bonus += 1
        return 10

    # Strength
    def calculate_strength(self) -> int:
        return self.strength + self.race.strength

    strength = models.PositiveSmallIntegerField(verbose_name='STR', validators=[
        MinValueValidator(1),
        MaxValueValidator(30)
    ])
    calculated_strength = models.PositiveSmallIntegerField(
        editable=False, default=calculate_strength)

    def calculate_strength_modifier(self) -> int:
        modifier = self.calculate_modifier(self.strength)
        return modifier

    strength_modifier = models.PositiveSmallIntegerField(
        editable=False, default=calculate_strength_modifier)

    # Dexterity
    def calculate_dexterity(self) -> int:
        return self.dexterity + self.race.dexterity

    dexterity = models.PositiveSmallIntegerField(verbose_name='DEX', validators=[
        MinValueValidator(1),
        MaxValueValidator(30)
    ])
    calculated_dexterity = models.PositiveSmallIntegerField(
        editable=False, default=calculate_dexterity)

    def calculate_dexterity_modifier(self) -> int:
        modifier = self.calculate_modifier(self.dexterity)
        return modifier

    dexterity_modifier = models.PositiveSmallIntegerField(
        editable=False, default=calculate_dexterity_modifier)

    # Constitution
    def calculate_constitution(self) -> int:
        return self.constitution + self.race.constitution

    constitution = models.PositiveSmallIntegerField(verbose_name='CON', validators=[
        MinValueValidator(1),
        MaxValueValidator(30)
    ])
    calculated_constitution = models.PositiveSmallIntegerField(
        editable=False, default=calculate_constitution)

    def calculate_constitution_modifier(self) -> int:
        modifier = self.calculate_modifier(self.constitution)
        return modifier

    constitution_modifier = models.PositiveSmallIntegerField(
        editable=False, default=calculate_constitution_modifier)

    # Intelligence
    def calculate_intelligence(self) -> int:
        return self.intelligence + self.race.intelligence

    intelligence = models.PositiveSmallIntegerField(verbose_name='INT', validators=[
        MinValueValidator(1),
        MaxValueValidator(30)
    ])
    calculated_intelligence = models.PositiveSmallIntegerField(
        editable=False, default=calculate_intelligence)

    def calculate_intelligence_modifier(self) -> int:
        modifier = self.calculate_modifier(self.intelligence)
        return modifier

    intelligence_modifier = models.PositiveSmallIntegerField(
        editable=False, default=calculate_intelligence_modifier)

    # Wisdom
    def calculate_wisdom(self) -> int:
        return self.wisdom + self.race.wisdom

    wisdom = models.PositiveSmallIntegerField(verbose_name='WIS', validators=[
        MinValueValidator(1),
        MaxValueValidator(30)
    ])
    calculated_wisdom = models.PositiveSmallIntegerField(
        editable=False, default=calculate_wisdom)

    def calculate_wisdom_modifier(self) -> int:
        modifier = self.calculate_modifier(self.wisdom)
        return modifier

    wisdom_modifier = models.PositiveSmallIntegerField(
        editable=False, default=calculate_wisdom_modifier)

    # Charisma
    def calculate_charisma(self):
        return self.charisma + self.race.charisma

    charisma = models.PositiveSmallIntegerField(verbose_name='CHA', validators=[
        MinValueValidator(1),
        MaxValueValidator(30)
    ])
    calculated_charisma = models.PositiveSmallIntegerField(
        editable=False, default=calculate_charisma)

    def calculate_charisma_modifier(self) -> int:
        modifier = self.calculate_modifier(self.charisma)
        return modifier

    charisma_modifier = models.PositiveSmallIntegerField(
        editable=False, default=calculate_charisma_modifier)

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

    def roll_dice(self, dices: int, sides: int, modifier: str = None) -> int:
        throws = 0
        for throw in range(dices):
            match modifier:
                case 'STR':
                    throws + randint(1, sides) + self.strength_modifier
                case 'DEX':
                    throws + randint(1, sides) + self.dexterity_modifier
                case 'CON':
                    throws + randint(1, sides) + self.constitution_modifier
                case 'INT':
                    throws + randint(1, sides) + self.intelligence_modifier
                case 'WIS':
                    throws + randint(1, sides) + self.wisdom_modifier
                case 'CHA':
                    throws + randint(1, sides) + self.charisma_modifier
                case _:
                    throws + randint(1, sides)
        return throws

    def advantage_roll(self, dices: int, sides: int, modifier: str = None) -> int:
        first_throw = self.roll_dice(dices, sides, modifier)
        first_throw_sum = 0
        for throw in first_throw:
            first_throw_sum += throw

        second_throw = self.roll_dice(dices, sides, modifier)
        second_throw_sum = 0
        for throw in second_throw:
            second_throw_sum += throw

        if first_throw_sum > second_throw_sum:
            return first_throw_sum
        return second_throw_sum

    def disadvantage_roll(self, dices: int, sides: int, modifier: str = None) -> int:
        first_throw = self.roll_dice(dices, sides, modifier)
        first_throw_sum = 0
        for throw in first_throw:
            first_throw_sum += throw

        second_throw = self.roll_dice(dices, sides, modifier)
        second_throw_sum = 0
        for throw in second_throw:
            second_throw_sum += throw

        if first_throw_sum < second_throw_sum:
            return first_throw_sum
        return second_throw_sum

    def save(self, *args, **kwargs) -> None:
        if self.race:
            self.languages.add(*self.race.languages.all())
            self.proficiencies.add(*self.race.proficiencies.all())
            self.features.add(*self.race.features.all())
            self.traits.add(*self.race.traits.all())
        if self.entity_class:
            self.proficiencies.add(*self.entity_class.all())            
        super().save(*args, **kwargs)
    
    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True
