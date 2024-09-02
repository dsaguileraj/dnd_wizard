export interface BaseInterface {
  id?: number;
  name: string;
}

export interface DescriptionInterface extends BaseInterface {
  description: string;
}

export interface Entity extends BaseInterface {
  race?: number;
  hit_points: number;
  str_score: number;
  dex_score: number;
  con_score: number;
  int_score: number;
  wis_score: number;
  cha_score: number;
  weapons: number[];
}

export interface Item extends BaseInterface {
  category?: number;
  cost: number;
  coin: undefined | "cp" | "sp" | "ep" | "gp" | "pp";
  weight: number;
}

export interface ImmResVul {
  condition_immunity: number[];
  damage_immunity: number[];
  damage_resistance: number[];
  damage_vulnerability: number[];
}

export interface PersonalCharacteristic {
  background: number;
  description: string;
}

export interface ProficiencyTrait {
  armor_choices: number;
  armor_list: number[];
  language_choices: number;
  language_list: number[];
  skill_choices: number;
  skill_list: number[];
  tool_choices: number;
  tool_list: number[];
  weapon_choices: number;
  weapon_list: number[];
  str_st: boolean;
  dex_st: boolean;
  con_st: boolean;
  int_st: boolean;
  wis_st: boolean;
  cha_st: boolean;
}
