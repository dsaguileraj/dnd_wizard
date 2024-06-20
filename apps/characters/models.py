from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models
from apps.core import choices
from apps.core.models import BaseModel, Entity


class Character(Entity):
    player = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Jugador'
    )
    background = models.ForeignKey(
        'traits.Background',
        on_delete=models.SET_NULL,
        verbose_name='Trasfondo',
        null=True
    )
    entity_class = models.ForeignKey(
        'characters.EntityClass',
        on_delete=models.SET_NULL,
        verbose_name='Clase',
        null=True
    )
    inspiration = models.BooleanField(
        verbose_name='Inspiración',
        default=False
    )

    def calculate_level(self) -> int:
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
        level = 0
        for points in LEVELS.values():
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
        default=calculate_proficiency_bonus,
        editable=False
    )
    
    # Traits
    languages = models.ManyToManyField(
        'traits.Language',
        verbose_name='Idiomas',
    )
    skills = models.ManyToManyField(
        'traits.Skill',
        verbose_name='Habilidades',
    )
    saving_throws = models.ManyToManyField(
        'traits.SavingThrow',
        name='Tiradas de Salvación',
    )
    armor_proficiencies = models.ManyToManyField(
        'actions.Armor',
        related_name='proficient_characters',
        verbose_name='Competencias con Armaduras',
    )
    weapon_proficiencies = models.ManyToManyField(
        'actions.Weapon',
        related_name='proficient_characters',
        verbose_name='Competencias con Armas',
    )
    tool_proficiencies = models.ManyToManyField(
        'actions.Tool',
        related_name='proficient_characters',
        verbose_name='Competencias con Herramientas',
    )

    def save(self, *args, **kwargs) -> None:
        if self.background:
            self.skills.add(*self.background.skills.all())
        if self.race:
            self.languages.add(*self.race.languages.all())
        if self.entity_class:
            self.armor_proficiencies.add(
                *self.entity_class.armor_proficiencies.all())
            self.weapon_proficiencies.add(
                *self.entity_class.weapon_proficiencies.all())
            self.saving_throws.add(*self.entity_class.saving_throws.all())
        super().save(*args, **kwargs)

    class Meta:
        ordering = ["name"]


class EntityClass(BaseModel):
    hit_dice = models.PositiveSmallIntegerField(
        verbose_name='Dado de Golpe',
        validators=[
            MaxValueValidator(20),
            MinValueValidator(4)
        ]
    )
    
    # Traits
    armor_proficiencies = models.ManyToManyField(
        'actions.Armor',
        verbose_name='Competencias con Armaduras',
    )
    weapon_proficiencies = models.ManyToManyField(
        'actions.Weapon',
        verbose_name='Competencias con Armas',
    )
    saving_throws = models.ManyToManyField(
        'traits.SavingThrow',
        verbose_name='Tiradas de Salvación',
        max_length=2
    )
    
    # Traits Choices
    max_tool_proficiencies_choices = models.PositiveSmallIntegerField(
        verbose_name='Competencia con Herramientas Disponibles',
        validators=[
            MaxValueValidator(3)
        ]
    )
    tool_proficiencies_choices = models.ManyToManyField(
        'actions.Tool',
        verbose_name='Lista de Competencias con Herramientas Disponibles',
        blank=True
    )
    max_skill_choices = models.PositiveSmallIntegerField(
        verbose_name='Habilidades Disponibles',
        validators=[
            MaxValueValidator(3),
            MinValueValidator(1)
        ]
    )
    skill_choices = models.ManyToManyField(
        'traits.SKill',
        verbose_name='Lista de Habilidades Disponibles',
    )

    class Meta:
        ordering = ["name"]


class Monster(Entity):
    def calculate_proficiency_bonus(self) -> int:
        if self.challenge <= 8:
            return 2
        elif self.challenge % 4 == 0:
            return self.challenge // 4
        else:
            return self.challenge // 4 + 1
    challenge = models.PositiveSmallIntegerField(
        verbose_name='Nivel de Desafío',
        validators=[
            MaxValueValidator(34),
            MinValueValidator(1)
        ]
    )
    proficiency_bonus = models.PositiveSmallIntegerField(
        verbose_name='Bonificador de Competencia',
        default=calculate_proficiency_bonus,
        editable=False
    )

    class Meta:
        ordering = ["name"]


class Race(BaseModel):
    is_playable = models.BooleanField(
        verbose_name='¿Jugable?',
        default=False
    )

    # Inherited Stat Bonus
    strength = models.PositiveSmallIntegerField(
        verbose_name=choices.Stats.STR,
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    dexterity = models.PositiveSmallIntegerField(
        verbose_name=choices.Stats.DEX,
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    constitution = models.PositiveSmallIntegerField(
        verbose_name=choices.Stats.CON,
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    intelligence = models.PositiveSmallIntegerField(
        verbose_name=choices.Stats.INT,
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    wisdom = models.PositiveSmallIntegerField(
        verbose_name=choices.Stats.WIS,
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )
    charisma = models.PositiveSmallIntegerField(
        verbose_name=choices.Stats.CHA,
        default=0,
        validators=[
            MaxValueValidator(2)
        ]
    )

    # Racial Traits
    size = models.CharField(
        verbose_name='Tamaño',
        max_length=3,
        choices=choices.Sizes
    )
    speed = models.PositiveSmallIntegerField(
        verbose_name='Velocidad'
    )
    damage_immunities = models.ManyToManyField(
        'traits.DamageImmunity',
        verbose_name='Inmunidad a Daño',
        blank=True
    )
    damage_resistances =models.ManyToManyField(
        'traits.DamageResistence',
        verbose_name='Resistencia a Daño',
        blank=True
    )
    damage_vulnerabilities = models.ManyToManyField(
        'traits.DamageVulnerability',
        verbose_name='Vulnerabilidad a Daño',
        blank=True
    )
    state_immunities = models.ManyToManyField(
        'traits.StateImmunity',
        verbose_name='Inmunidad a Estado',
        blank=True
    )

    # Traits
    language_choices = models.SmallIntegerField(
        verbose_name='Idiomas a elección',
        validators=[
            MaxValueValidator(2)
        ]
    )
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

    def save(self) -> None:
        if not self.is_playable:
            self.strength = 0
            self.dexterity = 0
            self.constitution = 0
            self.intelligence = 0
            self.wisdom = 0
            self.charisma = 0
        super().save()

    class Meta:
        ordering = ["name"]
