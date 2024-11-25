from django.db.models import IntegerChoices, TextChoices


class Coins(TextChoices):
    COPPER = "cp"
    SILVER = "sp"
    ELECTRUM = "ep"
    GOLD = "gp"
    PLATINUM = "pp"


class Dices(IntegerChoices):
    D4 = 4
    D6 = 6
    D8 = 8
    D10 = 10
    D12 = 12
    D20 = 20
