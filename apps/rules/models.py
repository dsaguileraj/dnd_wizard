from django.db import models
from apps.core.choices import Stats, EquipmentTypes
from apps.core.models import BaseModel, DescriptionModel


class Category(BaseModel):
    equipment_type = models.CharField(
        max_length=1,
        null=True,
        default=None,
        choices=EquipmentTypes
    )

    class Meta:
        ordering = ["name"]


class Condition(DescriptionModel):
    class Meta:
        ordering = ["name"]


class DamageType(BaseModel):
    class Meta:
        ordering = ["name"]


class Feature(DescriptionModel):
    class Meta:
        ordering = ["name"]


class Language(BaseModel):
    class Meta:
        ordering = ["name"]


class MagicSchool(DescriptionModel):
    class Meta:
        ordering = ["name"]


class Skill(BaseModel):
    modifier = models.CharField(
        max_length=3,
        choices=Stats
    )

    class Meta:
        ordering = ["name"]


class WeaponProperty(BaseModel):
    class Meta:
        ordering = ["name"]
