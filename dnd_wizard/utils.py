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


def calculate_modifier(score: int) -> int:
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
