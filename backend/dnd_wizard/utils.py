# Required experience to level up
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
    20: 355000,
}

# Experience earned by defeat an enemy
CHALLENGE = {
    1: 10,
    2: 25,
    3: 50,
    4: 100,
    5: 200,
    6: 450,
    7: 700,
    8: 1100,
    9: 1800,
    10: 2300,
    11: 2900,
    12: 3900,
    13: 5000,
    14: 5900,
    15: 7200,
    16: 8400,
    17: 10000,
    18: 11500,
    19: 13000,
    20: 15000,
    21: 18000,
    22: 20000,
    23: 22000,
    24: 25000,
    25: 33000,
    26: 41000,
    27: 50000,
    28: 62000,
    29: 75000,
    30: 90000,
    31: 105000,
    32: 120000,
    33: 135000,
    34: 155000
}


def calculate_modifier(score: int) -> int:
    """Returns the ability score modifier to apply when rolling dice based on *score*.

    Args:
        score (int): Ability score to calculate the ability score modifier

    Returns:
        int: Ability score modifier
    """
    modifier = -5
    if score < 30:
        if score % 2 == 0:
            score += 1
        for s in range(1, 30, 2):
            if score == s:
                return modifier
            modifier += 1
    else:
        return 10
