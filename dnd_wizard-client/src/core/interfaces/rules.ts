import { BaseInterface, DescriptionInterface, ProficiencyTrait } from "./core";

export interface Category extends DescriptionInterface {
  item_type?: number;
}

export interface Condition extends DescriptionInterface {}

export interface CreatureType extends DescriptionInterface {}

export interface DamageType extends DescriptionInterface {
  subtype: string;
}

export interface Feature extends DescriptionInterface, ProficiencyTrait {
  condition_immunity?: number[];
  damage_immunity?: number[];
  damage_resistance?: number[];
  damage_vulnerability?: number[];
}

export interface ItemProperty extends DescriptionInterface {
  item_type?: number;
}

export interface Language extends DescriptionInterface {}

export interface MagicSchool extends DescriptionInterface {}

export interface Skill extends BaseInterface {
  stat: string;
}
