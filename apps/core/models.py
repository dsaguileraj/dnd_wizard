from random import randint
from django.core.validators import MaxValueValidator
from django.db import models
from . import choices


class BaseModel(models.Model):
    name = models.CharField(
        verbose_name='Nombre',
        max_length=50,
        unique=True
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True


class DescriptionModel(BaseModel):
    description = models.CharField(
        verbose_name='Descripción',
        max_length=1250,
        unique=True
    )
    
    class Meta:
        abstract = True


class Entity(BaseModel):
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

    def calculate_strength_modifier(self) -> int:
        modifier = self.calculate_modifier(self.strength)
        return modifier
    strength = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.STR} Base',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_strength = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.STR} Total',
        default=calculate_strength,
        editable=False
    )
    strength_modifier = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.STR} Modificador',
        default=calculate_strength_modifier,
        editable=False
    )
    
    # Dexterity
    def calculate_dexterity(self) -> int:
        return self.dexterity + self.race.dexterity

    def calculate_dexterity_modifier(self) -> int:
        modifier = self.calculate_modifier(self.dexterity)
        return modifier
    dexterity = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.DEX} Base',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_dexterity = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.DEX} Total',
        default=calculate_dexterity,
        editable=False
    )
    dexterity_modifier = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.DEX} Modificador',
        default=calculate_dexterity_modifier,
        editable=False
    )
    
    # Constitution
    def calculate_constitution(self) -> int:
        return self.constitution + self.race.constitution

    def calculate_constitution_modifier(self) -> int:
        modifier = self.calculate_modifier(self.constitution)
        return modifier
    constitution = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.CON} Base',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_constitution = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.CON} Total',
        default=calculate_constitution,
        editable=False
    )
    constitution_modifier = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.CON} Modificador',
        default=calculate_constitution_modifier,
        editable=False
    )
    
    # Intelligence
    def calculate_intelligence(self) -> int:
        return self.intelligence + self.race.intelligence

    def calculate_intelligence_modifier(self) -> int:
        modifier = self.calculate_modifier(self.intelligence)
        return modifier
    intelligence = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.INT} Base',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_intelligence = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.INT} Total',
        default=calculate_intelligence,
        editable=False
    )
    intelligence_modifier = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.INT} Modificador',
        default=calculate_intelligence_modifier,
        editable=False
    )
    
    # Wisdom
    def calculate_wisdom(self) -> int:
        return self.wisdom + self.race.wisdom

    def calculate_wisdom_modifier(self) -> int:
        modifier = self.calculate_modifier(self.wisdom)
        return modifier
    wisdom = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.WIS} Base',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_wisdom = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.WIS} Total',
        default=calculate_wisdom,
        editable=False
    )
    wisdom_modifier = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.WIS}Modificador',
        default=calculate_wisdom_modifier,
        editable=False
    )

    # Charisma
    def calculate_charisma(self):
        return self.charisma + self.race.charisma

    def calculate_charisma_modifier(self) -> int:
        modifier = self.calculate_modifier(self.charisma)
        return modifier
    charisma = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.CHA} Base',
        validators=[
            MaxValueValidator(30)
        ]
    )
    calculated_charisma = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.CHA} Total',
        default=calculate_charisma,
        editable=False
    )
    charisma_modifier = models.PositiveSmallIntegerField(
        verbose_name=f'{choices.Stats.CHA} Modificador',
        default=calculate_charisma_modifier,
        editable=False
    )
    
    # Traits
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
    
    # Actions
    armor = models.ManyToManyField(
        'actions.Armor',
        verbose_name='Armadura',
        blank=True
    )
    equipment = models.ManyToManyField(
        'actions.AdventureGear',
        verbose_name='Equipo de Aventurero',
        blank=True
    )
    spells = models.ManyToManyField(
        'actions.Spell',
        verbose_name='Conjuros',
        blank=True
    )
    weapons = models.ManyToManyField(
        'actions.Weapon',
        verbose_name='Armas',
        blank=True
    )
    
    # Inventory
    tools = models.ManyToManyField(
        'actions.Tool',
        verbose_name='Herramientas',
        blank=True
    )
    trinkets = models.ManyToManyField(
        'actions.Trinket',
        verbose_name='Baratijas',
        blank=True
    )
    copper_pieces = models.PositiveSmallIntegerField(
        verbose_name='Piezas de Cobre',
        default=0
    )
    silver_pieces = models.PositiveSmallIntegerField(
        verbose_name='Piezas de Plata',
        default=0
    )
    electrum_pieces = models.PositiveSmallIntegerField(
        verbose_name='Piezas de Electro',
        default=0
    )
    gold_pieces = models.PositiveSmallIntegerField(
        verbose_name='Piezas de Oro',
        default=0
    )
    platinum_pieces = models.PositiveSmallIntegerField(
        verbose_name='Piezas de Platino',
        default=0
    )

    def roll_dice(self, dices: int = 1, sides: int = 4, bonus: int = 0, modifier: str | None = None) -> int:
        throws = 0
        for throw in range(dices):
            match modifier:
                case choices.Stats.STR:
                    throws + randint(1, sides) + self.strength_modifier
                case choices.Stats.DEX:
                    throws + randint(1, sides) + self.dexterity_modifier
                case choices.Stats.CON:
                    throws + randint(1, sides) + self.constitution_modifier
                case choices.Stats.INT:
                    throws + randint(1, sides) + self.intelligence_modifier
                case choices.Stats.WIS:
                    throws + randint(1, sides) + self.wisdom_modifier
                case choices.Stats.CHA:
                    throws + randint(1, sides) + self.charisma_modifier
                case _:
                    throws + randint(1, sides)
            return throws + bonus

    def advantage_roll(self, dices: int = 1, sides: int = 4, bonus: int = 0, modifier: str | None = None) -> int:
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

    def disadvantage_roll(self, dices: int = 1, sides: int = 4, bonus: int = 0, modifier: str | None = None) -> int:
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

    class Meta:
        abstract = True


class Item(BaseModel):
    cost = models.PositiveBigIntegerField(
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

    class Meta:
        abstract = True


class PersonalCharacteristic(models.Model):
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
        return f'{self.background}: {__name__} ({self.pk})'

    class Meta:
        abstract = True
