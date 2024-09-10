import {
  BaseProps,
  ImmResVulProps,
  PersonalTraitProps,
  ProficiencyTraitProps,
} from "@core/interfaces/core";

export interface RaceProps extends BaseProps, ImmResVulProps, ProficiencyTraitProps {
  aligment?: string,
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
  is_playable: boolean,
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

export interface EntityClassProps extends BaseProps, ProficiencyTraitProps {
  hit_dice?: number;
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

export interface BackgroundProps extends BaseProps, ProficiencyTraitProps {
  features: number[];
}

export interface BondProps extends PersonalTraitProps {}

export interface FlawProps extends PersonalTraitProps {}

export interface IdealProps extends PersonalTraitProps {}

export interface PersonalityProps extends PersonalTraitProps {}
