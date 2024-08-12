from django.db.models import TextChoices, IntegerChoices
from django.utils.translation import gettext_lazy as _


class Aligments(TextChoices):
    LAWFULL_GOOD = "LG"
    LAWFULL_NEUTRAL = "LN"
    LAWFULL_EVIL = "LE"
    NEUTRAL_GOOD = "NG"
    NEUTRAL_NEUTRAL = "NN"
    NEUTRAL_EVIL = "NE"
    CHOATIC_GOOD = "CG"
    CHOATIC_NEUTRAL = "CN"
    CHOATIC_EVIL = "CE"


class Dices(IntegerChoices):
    D4 = 4
    D6 = 6
    D8 = 8
    D10 = 10
    D12 = 12
    D20 = 20


class ItemTypes(TextChoices):
    ARMOR = "A"
    GEAR = "G"
    TOOL = "T"
    WEAPON = "W"


class Coins(TextChoices):
    COPPER = "cp"
    SILVER = "sp"
    ELECTRUM = "ep"
    GOLD = "gp"
    PLATINUM = "pp"


class MeasureTime(TextChoices):
    ACTION = "a"
    SECOND = "s"
    MINUTE = "min"
    HOUR = "h"
    DAY = "d"


class DamageSubtype(TextChoices):
    MAGIC = "M"
    PSHYSIC = "P"


class Sizes(TextChoices):
    XS = "XS", _("XS")
    S = "S", _("S")
    M = "M", _("M")
    L = "L", _("L")
    XL = "XL", _("XL")
    XXL = "XXL", _("XXL")


class Stats(TextChoices):
    STR = "STR", _("STR")
    DEX = "DEX", _("DEX")
    CON = "CON", _("CON")
    INT = "INT", _("INT")
    WIS = "WIS", _("WIS")
    CHA = "CHA", _("CHA")
