from random import randint
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from .choices import Aligments, Coins, MeasureMass, Stats


class BaseModel(models.Model):
    name = models.CharField(
        max_length=50,
        unique=True
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        abstract = True


class DescriptionModel(BaseModel):
    description = models.TextField(
        unique=True
    )

    class Meta:
        abstract = True


class Entity(BaseModel):
    race = models.ForeignKey(
        'traits.Race',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    aligment = models.CharField(
        max_length=2,
        choices=Aligments
    )

    # Stats
    def calculate_modifier(stat: int) -> int:
        bonus = -5
        if stat < 30:
            if stat % 2 == 0:
                stat += 1
            for modifier in range(1, 30, 2):
                if stat == modifier:
                    return bonus
                bonus += 1
        else:
            return 10

    # Strength
    def calculate_str(self) -> int:
        return self.base_str + self.race.inh_str

    def calculate_str_modifier(self) -> int:
        return self.calculate_modifier(self.total_str)
    base_str = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    total_str = models.IntegerField(
        default=calculate_str,
        editable=False
    )
    str_modifier = models.IntegerField(
        default=calculate_str_modifier,
        editable=False
    )

    # Dexterity
    def calculate_dex(self) -> int:
        return self.base_dex + self.race.inh_dex

    def calculate_dex_modifier(self) -> int:
        return self.calculate_modifier(self.total_dex)
    base_dex = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    total_dex = models.IntegerField(
        default=calculate_dex,
        editable=False
    )
    dex_modifier = models.IntegerField(
        default=calculate_dex_modifier,
        editable=False
    )

    # Constitution
    def calculate_con(self) -> int:
        return self.base_con + self.race.inh_con

    def calculate_con_modifier(self) -> int:
        return self.calculate_modifier(self.total_con)
    base_con = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    total_con = models.IntegerField(
        default=calculate_con,
        editable=False
    )
    con_modifier = models.IntegerField(
        default=calculate_con_modifier,
        editable=False
    )

    # Intelligence
    def calculate_int(self) -> int:
        return self.base_int + self.race.inh_int

    def calculate_int_modifier(self) -> int:
        return self.calculate_modifier(self.total_int)
    base_int = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    total_int = models.IntegerField(
        default=calculate_int,
        editable=False
    )
    int_modifier = models.IntegerField(
        default=calculate_int_modifier,
        editable=False
    )

    # Wisdom
    def calculate_wis(self) -> int:
        return self.base_wis + self.race.inh_wis

    def calculate_wis_modifier(self) -> int:
        return self.calculate_modifier(self.total_wis)
    base_wis = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    total_wis = models.IntegerField(
        default=calculate_wis,
        editable=False
    )
    wis_modifier = models.IntegerField(
        default=calculate_wis_modifier,
        editable=False
    )

    # Charisma
    def calculate_cha(self):
        return self.base_cha + self.race.inh_cha

    def calculate_cha_modifier(self) -> int:
        return self.calculate_modifier(self.total_cha)
    base_cha = models.IntegerField(
        validators=[
            MaxValueValidator(30),
            MinValueValidator(0)
        ]
    )
    total_cha = models.IntegerField(
        default=calculate_cha,
        editable=False
    )
    cha_modifier = models.IntegerField(
        default=calculate_cha_modifier,
        editable=False
    )

    # Saving Throws
    st_str = models.BooleanField(
        default=False
    )
    st_dex = models.BooleanField(
        default=False
    )
    st_con = models.BooleanField(
        default=False
    )
    st_int = models.BooleanField(
        default=False
    )
    st_wis = models.BooleanField(
        default=False
    )
    st_cha = models.BooleanField(
        default=False
    )

    skills = models.ManyToManyField(
        'rules.Skill',
        blank=True
    )

    # Actions
    armor = models.ManyToManyField(
        'actions.Armor',
        blank=True
    )
    equipment = models.ManyToManyField(
        'actions.AdventureGear',
        blank=True
    )
    spells = models.ManyToManyField(
        'actions.Spell',
        blank=True
    )
    weapons = models.ManyToManyField(
        'actions.Weapon',
        blank=True
    )

    # Inventory
    tools = models.ManyToManyField(
        'actions.Tool',
        blank=True
    )
    trinkets = models.ManyToManyField(
        'actions.Trinket',
        blank=True
    )
    copper_pieces = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    silver_pieces = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    electrum_pieces = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    gold_pieces = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    platinum_pieces = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )

    def roll_dice(self, dices: int = 1, sides: int = 4, bonus: int = 0, modifier: str | None = None) -> int:
        throws = 0
        for throw in range(dices):
            match modifier:
                case Stats.STR:
                    throws += randint(1, sides) + self.str_modifier
                case Stats.DEX:
                    throws += randint(1, sides) + self.dex_modifier
                case Stats.CON:
                    throws += randint(1, sides) + self.con_modifier
                case Stats.INT:
                    throws += randint(1, sides) + self.int_modifier
                case Stats.WIS:
                    throws += randint(1, sides) + self.wis_modifier
                case Stats.CHA:
                    throws += randint(1, sides) + self.cha_modifier
                case _:
                    throws += randint(1, sides)
            return throws + bonus

    def advantage_roll(self, dices: int = 1, sides: int = 4, bonus: int = 0, modifier: str | None = None) -> int:
        first_throw = self.roll_dice(dices, sides, bonus, modifier)
        second_throw = self.roll_dice(dices, sides, bonus, modifier)
        result = first_throw if first_throw > second_throw else second_throw
        return result

    def disadvantage_roll(self, dices: int = 1, sides: int = 4, bonus: int = 0, modifier: str | None = None) -> int:
        first_throw = self.roll_dice(dices, sides, bonus, modifier)
        second_throw = self.roll_dice(dices, sides, modifier)
        result = first_throw if first_throw < second_throw else second_throw
        return result

    class Meta:
        abstract = True


class Item(BaseModel):
    category = models.ForeignKey(
        'rules.Category',
        on_delete=models.SET_NULL,
        null=True,
        default=None
    )
    cost = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(0)
        ]
    )
    coin = models.CharField(
        max_length=2,
        default=Coins.COPPER,
        choices=Coins
    )
    weight = models.FloatField(
        default=0
    )
    weight_measure = models.CharField(
        max_length=2,
        null=True,
        default=None,
        choices=MeasureMass
    )

    class Meta:
        abstract = True


class PersonalCharacteristic(models.Model):
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.CASCADE,
    )
    name = models.TextField(
        unique=True
    )

    def __str__(self) -> str:
        return f'{self.background}: {__name__} ({self.pk})'

    class Meta:
        abstract = True
