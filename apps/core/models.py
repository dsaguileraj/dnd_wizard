from random import randint
from django.core.validators import MaxValueValidator
from django.db import models
from . import choices


class AbstractEntity(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=30,
        unique=True
    )
    race = models.ForeignKey(
        'characters.Race',
        on_delete=models.SET_NULL,
        verbose_name='Raza',
        null=True,
        default=None
    )
    aligment = models.CharField(
        verbose_name='Alineamiento',
        max_length=2,
        choices=choices.Aligments
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

    saving_throws = models.ManyToManyField(
        'traits.SavingThrow',
        name='Tiradas de Salvación',
        blank=True
    )
    skills = models.ManyToManyField(
        'traits.Skill',
        verbose_name='Habilidades',
        blank=True
    )

    # Special Attributes
    languages = models.ManyToManyField(
        'traits.Language',
        verbose_name='Idiomas',
        blank=True
    )
    features = models.ManyToManyField(
        'traits.Feature',
        verbose_name='Rasgos',
        blank=True
    )

    # Actions
    spells = models.ManyToManyField(
        'actions.Spell',
        verbose_name='Conjuros',
        blank=True
    )

    # Equipment
    equipment = models.ManyToManyField(
        'actions.AdventurerEquipment',
        verbose_name='Equipo de Aventurero',
        blank=True
    )
    armor = models.ManyToManyField(
        'actions.Armor',
        verbose_name='Armadura',
        blank=True
    )
    tools = models.ManyToManyField(
        'actions.Tool',
        verbose_name='Herramientas',
        blank=True
    )
    weapons = models.ManyToManyField(
        'actions.Weapon',
        verbose_name='Armas',
        blank=True
    )
    trinkets = models.ManyToManyField(
        'actions.Trinket',
        verbose_name='Baratijas',
        blank=True
    )

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


class Equipment(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
    )
    category = models.CharField(
        verbose_name='Categoría',
        max_length=50,
        null=True,
        default=None
    )
    price = models.PositiveBigIntegerField(
        verbose_name='Precio',
        default=0
    )
    coin = models.CharField(
        verbose_name='Moneda',
        max_length=3,
        default='pc',
        choices=choices.Coins
    )
    weight = models.DecimalField(
        verbose_name='Peso',
        max_digits=6,
        decimal_places=2,
        default=0
    )
    weight_measure = models.CharField(
        verbose_name='Magnitud',
        max_length=2,
        null=True,
        default='lb',
        choices=choices.MeasureMass
    )

    def __str__(self) -> str:
        if self.category is not None:
            return f'{self.name} - {self.category}'
        else:
            return {self.name}

    class Meta:
        abstract = True
