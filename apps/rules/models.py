from django.db import models
from apps.core.choices import ItemTypes, Stats, DamageSubtype
from apps.core.models import Description, Name, ProficiencyTrait


class Condition(Description, Name):
    ...


class CreatureType(Description, Name):
    ...


class DamageType(Description, Name):
    subtype = models.CharField(
        max_length=1, default=DamageSubtype.MAGIC, choices=DamageSubtype
    )


class Feature(Description, Name, ProficiencyTrait):
    ...


class ItemProperty(Description, Name):
    item_type = models.CharField(
        max_length=1, null=True, default=None, choices=ItemTypes
    )


class Language(Description, Name):
    ...


class MagicSchool(Description, Name):
    ...


class Skill(Name):
    stat = models.CharField(max_length=3, choices=Stats)
