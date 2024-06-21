from django.db.models import TextChoices
from django.utils.translation import gettext_lazy as _


class Aligments(TextChoices):
    LAWFULL_GOOD = 'LG'
    LAWFULL_NEUTRAL = 'LN'
    LAWFULL_EVIL = 'LE'
    NEUTRAL_GOOD = 'NG'
    NEUTRAL_NEUTRAL = 'NN'
    NEUTRAL_EVIL = 'NE'
    CHOATIC_GOOD = 'CG'
    CHOATIC_NEUTRAL = 'CN'
    CHOATIC_EVIL = 'CE'


class EquipmentTypes(TextChoices):
    ARMOR = 'A'
    GEAR = 'G'
    TOOL = 'T'
    WEAPON = 'W'


class Coins(TextChoices):
    COPPER = 'cp'
    SILVER = 'sp'
    ELECTRUM = 'ep'
    GOLD = 'gp'
    PLATINUM = 'pp'


class MeasureArea(TextChoices):
    SQUARE = 'c2'
    CENTIMETER = 'cm2'
    KILOMETER = 'km2'
    MILE = 'mi2'
    METER = 'm2'
    FOOT = 'ft2'
    INCH = 'in2'
    YAR = 'yd2'


class MeasureLength(TextChoices):
    SQUARE = 'c'
    CENTIMETER = 'cm'
    KILOMETER = 'km'
    MILE = 'mi'
    METER = 'm'
    FOOT = 'ft'
    INCH = 'in'
    YAR = 'yd'


class MeasureMass(TextChoices):
    GRAM = 'g'
    KILOGRAM = 'kg'
    POUND = 'lb'
    OUNCE = 'oz'


class MeasureSpeed(TextChoices):
    SQUARE4ACTION = 'c/a'
    FOOT4ACTION = 'ft/a'
    METER4ACTION = 'm/a'
    KILOMETER4HOUR = 'km/h'
    MILE4HOUR = 'mi/h'


class MeasureTime(TextChoices):
    ACTION = 'a'
    SECOND = 's'
    MINUTE = 'min'
    HOUR = 'h'
    DAY = 'd'


class MeasureVolume(TextChoices):
    GALLON = 'gal'
    LITER = 'lt'
    MILILITER = 'ml'
    PINT = 'pt'


class Sizes(TextChoices):
    XS = 'XS', _('XS')
    S = 'S', _('S')
    M = 'M', _('M')
    L = 'L', _('L')
    XL = 'XL', _('XL')
    XXL = 'XXL', _('XXL')


class Stats(TextChoices):
    STR = 'STR', _('STR')
    DEX = 'DEX', _('DEX')
    CON = 'CON', _('CON')
    INT = 'INT', _('INT')
    WIS = 'WIS', _('WIS')
    CHA = 'CHA', _('CHA')
