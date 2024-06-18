from django.db.models import TextChoices
from django.utils.translation import gettext_lazy as _


class Aligments(TextChoices):
    LAWFULL_GOOD = 'LB', _('Legal Bueno')
    LAWFULL_NEUTRAL = 'LN', _('Legal Neutro')
    LAWFULL_EVIL = 'LM', _('Legal Malvado')
    NEUTRAL_GOOD = 'NB', _('Neutral Bueno')
    NEUTRAL_NEUTRAL = 'NN', _('Neutral')
    NEUTRAL_EVIL = 'NM', _('Neutral Malvado')
    CHOATIC_GOOD = 'CB', _('Caótico Bueno')
    CHOATIC_NEUTRAL = 'CN', _('Caótico Neutro')
    CHOATIC_EVIL = 'CM', _('Caótico Malvado')


class CategoryArmor(TextChoices):
    LIGHT = 'Ligera', _('Ligera')
    MEDIUM = 'Mediana', _('Mediana')
    HEAVY = 'Pesada', _('Pesada')
    SHIELD = 'Escudo', _('Escudo')


class CategoryEquipment(TextChoices):
    ARCANE_FOCUS = 'Canalizador Arcano', _('Canalizador Arcano')
    DRUIDIC_FOCUS = 'Canalizador Druídico', _('Canalizador Druídico')
    MERCANCY = 'Mercancía', _('Mercancía')
    AMMUNITION = 'Munición', _('Munición')
    HOLY_SYMBOL = 'Símbolo Sagrado', _('Símbolo Sagrado')


class CategoryTool(TextChoices):
    ARTISAN_TOOL = 'Herramienta de Artesano', _('Herramienta de Artesano')
    MUSICAL_INSTRUMENT = 'Instrumento Musical', _('Instrumento Musical')
    GAMMING_SET = 'Set de Juego', _('Set de Juego')


class CategoryWeapon(TextChoices):
    SIMPLE_MELEE = 'Cuerpo a cuerpo sencilla', _('Cuerpo a cuerpo sencilla')
    SIMPLE_RANGED = 'A distancia sencilla', _('A distancia sencilla')
    MARCIAL_MELLE = 'Cuerpo a cuerpo marcial', _('Cuerpo a cuerpo marcial')
    MARCIAL_RANGED = 'A distancia marcial', _('A distancia marcial')


class Coins(TextChoices):
    COPPER = 'pc', _('Cobre')
    SILVER = 'pp', _('Plata'),
    ELECTRUM = 'pe', _('Electro')
    GOLD = 'po', _('Oro')
    PLATINUM = 'ppt', _('Platino')


class DamageTypes(TextChoices):
    BLUDGEONING = 'Contundente', _('Contundente')
    SLASHING = 'Cortante', _('Cortante')
    PIERCING = 'Perforante', _('Perforante')


class MagicSchools(TextChoices):
    ABJURATION = 'Abjuración', _('Abjuración')
    DIVINATION = 'Adivinación', _('Adivinación')
    CONJURATION = 'Conjuración', _('Conjuración')
    ENCHANTMENT = 'Encantamiento', _('Encantamiento')
    EVOCATION = 'Evocación', _('Evocación')
    ILLUSION = 'Ilusión', _('Ilusión')
    NECROMANCY = 'Nigromancia', _('Nigromancia')
    TRANSMUTATION = 'Transmutación', _('Transmutación')


class MeasureArea(TextChoices):
    SQUARE2 = 'c2', _('Casilla Cuadrada')
    CENTIMETER2 = 'cm2', _('Centímetro Cuadrado')
    KILOMETER2 = 'km2', _('Kilómetro Cuadrado')
    MILE2 = 'mi2', _('Milla Cuadrada')
    METER2 = 'm2', ('Metro Cuadrado')
    FOOT2 = 'ft2', _('Pie Cuadrado')
    INCH2 = 'in2', _('Pulgada Cuadrada')
    YAR2 = 'yd2', _('Yarda Cuadrada')


class MeasureLength(TextChoices):
    SQUARE = 'c', _('Casilla')
    CENTIMETER = 'cm', _('Centímetro')
    KILOMETER = 'km', _('Kilómetro')
    MILE = 'mi', _('Milla')
    METER = 'm', ('Metro')
    FOOT = 'ft', _('Pie')
    INCH = 'in', _('Pulgada')
    YAR = 'yd', _('Yarda')


class MeasureMass(TextChoices):
    GRAM = 'g', _('Gramo')
    KILOGRAM = 'kg', _('Kilogramo')
    POUND = 'lb', _('Libra')
    OUNCE = 'oz', _('Onza')


class MeasureSpeed(TextChoices):
    SQUARE4ACTION = 'c/a', _('Casilla/Acción')
    FOOT4ACTION = 'ft/a', _('Pie/Acción')
    METER4ACTION = 'm/a', _('Metro/Acción')
    KILOMETER4HOUR = 'km/h', _('Kilómetro/Hora')
    MILE4HOUR = 'mi/h', _('Milla/Hora')


class MeasureTime(TextChoices):
    ACTION = 'a', _('Acción')
    SECOND = 's', _('Segundo')
    MINUTE = 'min', _('Minuto')
    HOUR = 'h', _('Hora')
    DAY = 'd', _('Día')


class MeasureVolume(TextChoices):
    GALLON = 'gal', _('Galón')
    LITER = 'lt', _('Litro')
    MILILITER = 'ml', _('Mililitro')
    PINT = 'pt', _('Pinta')


class Sizes(TextChoices):
    XS = 'XS', _('Diminuto')
    S = 'S', _('Pequeño')
    M = 'M', _('Mediano')
    L = 'L', _('Grande')
    XL = 'XL', _('Enorme')
    XXL = 'XXL', _('Gigante')


class Stats(TextChoices):
    STR = 'FUE', _('Fuerza')
    DEX = 'DES', _('Destreza')
    CON = 'CON', _('Constitución')
    INT = 'INT', _('Inteligencia')
    WIS = 'SAB', _('Sabiduría')
    CHA = 'CAR', _('Carisma')
