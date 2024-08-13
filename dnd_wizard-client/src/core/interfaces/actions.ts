import { DescriptionInterface, Item } from "./core";

export interface AdventureGear extends Item {
  description?: string;
}

export interface Armor extends Item {
  armor_class: number;
  gives_dex_bonus: boolean;
  dex_bonus: number;
  required_str: number;
  property?: number[];
}

export interface Spell extends DescriptionInterface {
  magic_school?: number;
  damage_type?: number;
  level: number;
  spell_range: number;
  verbal: boolean;
  somatic: boolean;
  material: boolean;
  materials?: string;
  is_ritual: boolean;
  casting_time: number;
  casting_measure: string;
  need_concentration: boolean;
  duration: number;
  duration_measure: string;
}

export interface Tool extends Item {
  description?: string;
}

export interface Trinket extends Item {
  name: string;
}

export interface Weapon extends Item {
  dices: number;
  hit_dice?: number;
  bonus: number;
  damage_type?: number;
  property?: number[];
  melee_weapon: boolean;
  ranged_weapon: boolean;
  min_range?: number;
  max_range?: number;
}
