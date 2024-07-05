from django.db import models
from apps.core.choices import ItemTypes, Stats, DamageSubtype
from apps.core.models import BaseModel, DescriptionModel, ProficiencyTrait


class Category(DescriptionModel):
    item_type = models.CharField(
        max_length=1,
        null=True,
        default=None,
        choices=ItemTypes
    )


class Condition(DescriptionModel):
    ...


class CreatureType(DescriptionModel):
    ...


class DamageType(DescriptionModel):
    subtype = models.CharField(
        max_length=1,
        default=DamageSubtype.MAGIC,
        choices=DamageSubtype
    )


class Feature(DescriptionModel, ProficiencyTrait):
    # Immunities, Resistances & Vulneravilities
    condition_immunity = models.ManyToManyField(
        'rules.Condition',
        related_name='condition_immunity_by_feature',
        blank=True
    )
    damage_immunity = models.ManyToManyField(
        'rules.DamageType',
        related_name='damage_immunity_by_feature',
        blank=True
    )
    damage_resistance = models.ManyToManyField(
        'rules.DamageType',
        related_name='damage_resistance_by_feature',
        blank=True
    )
    damage_vulnerability = models.ManyToManyField(
        'rules.DamageType',
        related_name='damage_vulnerability_by_feature',
        blank=True
    )


class ItemProperty(DescriptionModel):
    item_type = models.CharField(
        max_length=1,
        null=True,
        default=None,
        choices=ItemTypes
    )


class Language(DescriptionModel):
    ...


class MagicSchool(DescriptionModel):
    ...


class Skill(BaseModel):
    stat = models.CharField(
        max_length=3,
        choices=Stats
    )
