import {
  BaseInterface,
  ImmResVul,
  PersonalCharacteristic,
  ProficiencyTrait,
} from "./core";

export interface Race extends BaseInterface, ImmResVul, ProficiencyTrait {
  creature_type: number[];
  str_increase: number;
  dex_increase: number;
  con_increase: number;
  int_increase: number;
  wis_increase: number;
  cha_increase: number;
  size: string;
  features: number[];
  has_nature_armor: boolean;
  nature_armor: number;
  burrow: number;
  climb: number;
  fly: number;
  swim: number;
  walk: number;
  innate_spellcaster: boolean;
  ability?: string;
  known_spells: number;
  spells_available: number[];
}

export interface EntityClass extends BaseInterface, ProficiencyTrait {
  hit_dice: number;
  innate_spellcaster: boolean;
  ability?: string;
  spell_list: number[];
}

export interface ProgressTable {
  entity_class: number;
  level: number;
  features: number[];
  known_cantrips: number;
  known_spells: number;
  spell_slot_1: number;
  spell_slot_2: number;
  spell_slot_3: number;
  spell_slot_4: number;
  spell_slot_5: number;
  spell_slot_6: number;
  spell_slot_7: number;
  spell_slot_8: number;
  spell_slot_9: number;
}

export interface Background extends BaseInterface, ProficiencyTrait {
  features: number[];
}

export interface Bond extends PersonalCharacteristic {}

export interface Flaw extends PersonalCharacteristic {}

export interface Ideal extends PersonalCharacteristic {}

export interface Personality extends PersonalCharacteristic {}
