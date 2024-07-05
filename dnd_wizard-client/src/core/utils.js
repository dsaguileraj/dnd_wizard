export const findFieldName = (query, id) => {
  const index = query.findIndex(dict => dict.id == id);
  const category = query[index].name;
  return category ? category : '---';
};

export const calculateLevel = experience => {
  const LEVELS = {
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
  };
  let level = 0;
  for (const lvl in LEVELS) {
    if (experience >= LEVELS[lvl]) {
      level++;
    } else {
      return level;
    }
  }
};

export const calculateModifier = stat => {
  let bonus = -5;
  if (stat < 30) {
    if (stat % 2 == 0) {
      stat++;
    }
    for (let modifier = 1; modifier < 30; modifier += 2) {
      if (stat == modifier) {
        return bonus;
      }
      bonus++;
    }
  } else {
    return 10;
  }
};

export const proficiencyBonus4Level = experience => {
  const level = calculateLevel(experience);
  const baseBonus = Math.floor(level / 4);
  return level % 4 == 0 ? baseBonus + 1 : baseBonus + 2;
  
};

export const proficiencyBonus4Challenge = challenge => {
  const baseBonus = Math.floor(challenge / 4);
  return challenge <= 8 ? 2 : challenge % 4 == 0 ? baseBonus : baseBonus + 1;
};
