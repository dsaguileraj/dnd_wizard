from random import randint
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator
from django.db import models


class Race(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_race',
        primary_key=True,
        max_length=50
    )
    is_playable = models.BooleanField(
        verbose_name='¿Jugable?'
    )
    languages = models.ManyToManyField(
        'traits.Language',
        verbose_name='Idiomas',
        name='languages_race',
        blank=True
    )
    features = models.ManyToManyField(
        'traits.Feature',
        verbose_name='Rasgos',
        name='features_race',
        blank=True
    )
    SIZE_CHOICES = {
        'XS': 'Diminuto',
        'S': 'Pequeño',
        'M': 'Mediano',
        'L': 'Grande',
        'XL': 'Enorme',
        'XXL': 'Gigante'
    }
    size = models.CharField(
        verbose_name='Tamaño',
        max_length=3,
        choices=SIZE_CHOICES
    )
    speed = models.PositiveSmallIntegerField(
        verbose_name='Velocidad'
    )

    # Inherited Stat Bonus
    strength = models.PositiveSmallIntegerField(
        verbose_name='FUE Heredada',
        name='strength_race',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    dexterity = models.PositiveSmallIntegerField(
        verbose_name='DES Heredada',
        name='dexterity_race',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    constitution = models.PositiveSmallIntegerField(
        verbose_name='CON Heredada',
        name='constitution_race',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    intelligence = models.PositiveSmallIntegerField(
        verbose_name='INT Heredada',
        name='intelligence_race',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    wisdom = models.PositiveSmallIntegerField(
        verbose_name='SAB Heredada',
        name='wisdom_race',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    charisma = models.PositiveSmallIntegerField(
        verbose_name='CAR Heredada',
        name='charisma_race',
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )

    def __str__(self) -> str:
        return self.name


class EntityClass(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_class',
        primary_key=True,
        max_length=50
    )
    hit_dice = models.PositiveSmallIntegerField(
        verbose_name='Dado de Golpe',
        name='hit_dice_class',
        validators=[
            MaxValueValidator(20)
        ]
    )
    proficiencies = models.ManyToManyField(
        'traits.Proficiency',
        verbose_name='Competencias',
        name='proficiencies_class'
    )

    def __str__(self) -> str:
        return self.name


class AbstractEntity(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        name='name_entity',
        max_length=30,
        unique=True
    )
    race = models.ForeignKey(
        'characters.Race',
        on_delete=models.SET_NULL,
        verbose_name='Raza',
        name='race_entity',
        null=True
    )

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
    aligment = models.CharField(
        verbose_name='Alineamiento',
        max_length=2,
        choices=ALIGMENT_CHOICES
    )

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

    strength = models.PositiveSmallIntegerField(
        verbose_name='FUE Base',
        name='strength_entity',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_strength = models.PositiveSmallIntegerField(
        verbose_name='FUE Total',
        default=calculate_strength,
        editable=False
    )

    def calculate_strength_modifier(self) -> int:
        modifier = self.calculate_modifier(self.strength)
        return modifier

    strength_modifier = models.PositiveSmallIntegerField(
        verbose_name='Modificador [FUE]',
        default=calculate_strength_modifier,
        editable=False
    )

    # Dexterity
    def calculate_dexterity(self) -> int:
        return self.dexterity + self.race.dexterity

    dexterity = models.PositiveSmallIntegerField(
        verbose_name='DES Base',
        name='dexterity_entity',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_dexterity = models.PositiveSmallIntegerField(
        verbose_name='DES Total',
        default=calculate_dexterity,
        editable=False
    )

    def calculate_dexterity_modifier(self) -> int:
        modifier = self.calculate_modifier(self.dexterity)
        return modifier

    dexterity_modifier = models.PositiveSmallIntegerField(
        verbose_name='Modificador [DES]',
        default=calculate_dexterity_modifier,
        editable=False
    )

    # Constitution
    def calculate_constitution(self) -> int:
        return self.constitution + self.race.constitution

    constitution = models.PositiveSmallIntegerField(
        verbose_name='CON Base',
        name='constitution_entity',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_constitution = models.PositiveSmallIntegerField(
        verbose_name='CON Total',
        default=calculate_constitution,
        editable=False
    )

    def calculate_constitution_modifier(self) -> int:
        modifier = self.calculate_modifier(self.constitution)
        return modifier

    constitution_modifier = models.PositiveSmallIntegerField(
        verbose_name='Modificador [CON]',
        default=calculate_constitution_modifier,
        editable=False
    )

    # Intelligence
    def calculate_intelligence(self) -> int:
        return self.intelligence + self.race.intelligence

    intelligence = models.PositiveSmallIntegerField(
        verbose_name='INT Base',
        name='intelligence_entity',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_intelligence = models.PositiveSmallIntegerField(
        verbose_name='INT Total',
        default=calculate_intelligence,
        editable=False
    )

    def calculate_intelligence_modifier(self) -> int:
        modifier = self.calculate_modifier(self.intelligence)
        return modifier

    intelligence_modifier = models.PositiveSmallIntegerField(
        verbose_name='Modificador [INT]',
        default=calculate_intelligence_modifier,
        editable=False
    )

    # Wisdom
    def calculate_wisdom(self) -> int:
        return self.wisdom + self.race.wisdom

    wisdom = models.PositiveSmallIntegerField(
        verbose_name='SAB Base',
        name='wisdom_entity',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_wisdom = models.PositiveSmallIntegerField(
        verbose_name='SAB Total',
        default=calculate_wisdom,
        editable=False
    )

    def calculate_wisdom_modifier(self) -> int:
        modifier = self.calculate_modifier(self.wisdom)
        return modifier

    wisdom_modifier = models.PositiveSmallIntegerField(
        verbose_name='Modificador [SAB]',
        default=calculate_wisdom_modifier,
        editable=False
    )

    # Charisma
    def calculate_charisma(self):
        return self.charisma + self.race.charisma

    charisma = models.PositiveSmallIntegerField(
        verbose_name='CAR Base',
        name='charisma_entity',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_charisma = models.PositiveSmallIntegerField(
        verbose_name='CAR Total',
        default=calculate_charisma,
        editable=False
    )

    def calculate_charisma_modifier(self) -> int:
        modifier = self.calculate_modifier(self.charisma)
        return modifier

    charisma_modifier = models.PositiveSmallIntegerField(
        verbose_name='Modificador [CAR]',
        default=calculate_charisma_modifier,
        editable=False
    )

    # Saving Throws
    st_strength = models.BooleanField(
        verbose_name='Tirada de Salvación [FUE]'
    )
    st_dexterity = models.BooleanField(
        verbose_name='Tirada de Salvación [DES]'
    )
    st_constitution = models.BooleanField(
        verbose_name='Tirada de Salvación [CON]'
    )
    st_intelligence = models.BooleanField(
        verbose_name='Tirada de Salvación [INT]'
    )
    st_wisdom = models.BooleanField(
        verbose_name='WIS Tirada de Salvación [SAB]'
    )
    st_charisma = models.BooleanField(
        verbose_name='Tirada de Salvación [CAR]'
    )

    # Skills
    acrobatics = models.BooleanField(
        verbose_name='Acrobacias'
    )
    animal_handling = models.BooleanField(
        verbose_name='Trato con Animales'
    )
    arcana = models.BooleanField(
        verbose_name='Conocimiento Arcano'
    )
    athletics = models.BooleanField(
        verbose_name='Atletismo'
    )
    deception = models.BooleanField(
        verbose_name='Engaño'
    )
    history = models.BooleanField(
        verbose_name='Historia'
    )
    insight = models.BooleanField(
        verbose_name='Perspicacia'
    )
    intimidation = models.BooleanField(
        verbose_name='Intimidación'
    )
    investigation = models.BooleanField(
        verbose_name='Investigación'
    )
    medicine = models.BooleanField(
        verbose_name='Medicina'
    )
    nature = models.BooleanField(
        verbose_name='Naturaleza'
    )
    perception = models.BooleanField(
        verbose_name='Percepción'
    )
    performance = models.BooleanField(
        verbose_name='Interpretación'
    )
    persuasion = models.BooleanField(
        verbose_name='Persuasión'
    )
    religion = models.BooleanField(
        verbose_name='Religión'
    )
    sleigth_of_hand = models.BooleanField(
        verbose_name='Juego de Manos'
    )
    stealth = models.BooleanField(
        verbose_name='Sigilo'
    )
    survival = models.BooleanField(
        verbose_name='Supervivencia'
    )

    # Special Attributes
    languages = models.ManyToManyField(
        'traits.Language',
        verbose_name='Idiomas',
        name='languages_entity',
        blank=True
    )
    proficiencies = models.ManyToManyField(
        'traits.Proficiency',
        verbose_name='Competencias',
        name='proficiencies_entity',
        blank=True
    )
    features = models.ManyToManyField(
        'traits.Feature',
        verbose_name='Rasgos',
        name='features_entity',
        blank=True
    )

    # Actions
    spells = models.ManyToManyField(
        'actions.Spell',
        verbose_name='Conjuros'
    )
    # ... equipment

    def roll_dice(self, dices: int, sides: int, bonus: int = 0, modifier: str = None) -> int:
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
        return throws + bonus

    def advantage_roll(self, dices: int, sides: int, bonus: int = 0, modifier: str = None) -> int:
        first_throw = self.roll_dice(dices, sides, bonus, modifier)
        first_throw_sum = 0
        for throw in first_throw:
            first_throw_sum += throw

        second_throw = self.roll_dice(dices, sides, bonus, modifier)
        second_throw_sum = 0
        for throw in second_throw:
            second_throw_sum += throw

        if first_throw_sum > second_throw_sum:
            return first_throw_sum
        return second_throw_sum

    def disadvantage_roll(self, dices: int, sides: int, bonus: int = 0, modifier: str = None) -> int:
        first_throw = self.roll_dice(dices, sides, bonus, modifier)
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

    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True


class Character(AbstractEntity):
    player = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Jugador',
    )
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.SET_NULL,
        verbose_name='Trasfondo',
        name='background_character',
        null=True
    )
    entity_class = models.ForeignKey(
        'characters.EntityClass',
        on_delete=models.SET_NULL,
        verbose_name='Clase',
        name='class_character',
        null=True
    )
    inspiration = models.BooleanField(
        verbose_name='Inspiración'
    )
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

    experience = models.PositiveIntegerField(
        verbose_name='Experiencia',
        default=0
    )
    level = models.PositiveSmallIntegerField(
        verbose_name='Nivel',
        name='level_character',
        default=calculate_level,
        editable=False
    )

    def calculate_proficiency_bonus(self) -> int:
        if self.level % 4 == 0:
            return self.level // 4 + 1
        else:
            return self.level // 4 + 2

    proficiency_bonus = models.PositiveSmallIntegerField(
        verbose_name='Bonificador por Competencia',
        name='proficiency_bonus_character',
        default=calculate_proficiency_bonus,
        editable=False
    )

    def save(self, *args, **kwargs) -> None:
        if self.race:
            self.languages.add(*self.race.languages.all())
            self.features.add(*self.race.features.all())
        if self.entity_class:
            self.proficiencies.add(*self.entity_class.all())
        super().save(*args, **kwargs)


class Monster(AbstractEntity):
    CHALLENGE_CHOICES = {
        0: '0',
        1/8: '1/8',
        1/4: '1/4',
        1/2: '1/2',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
        18: '18',
        19: '19',
        20: '20',
        21: '21',
        22: '22',
        23: '23',
        24: '24',
        25: '25',
        26: '26',
        27: '27',
        28: '28',
        29: '29',
        30: '30'
    }
    challenge = models.DecimalField(
        max_digits=5,
        decimal_places=3,
        verbose_name='Desafío',
        choices=CHALLENGE_CHOICES
    )

    def calculate_proficiency_bonus(self) -> int:
        if self.challenge < 1:
            return 2
        if self.challenge % 4 == 0:
            return self.challenge // 4 + 1
        else:
            return self.challenge // 4 + 2

    proficiency_bonus = models.PositiveSmallIntegerField(
        verbose_name='Bonificador por Competencia',
        name='proficiency_bonus_monster',
        default=calculate_proficiency_bonus,
        editable=False
    )
