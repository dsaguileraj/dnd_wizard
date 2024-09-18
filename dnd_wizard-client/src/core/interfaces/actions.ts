import { DescriptionProps, ItemProps } from "@core/interfaces/core";

export interface AdventureGearProps extends ItemProps {
  description?: string;
}

export interface ArmorProps extends ItemProps {
  armor_class: number;
  gives_dex_bonus: boolean;
  dex_bonus: number;
  required_str: number;
  property: number[];
}

export interface SpellProps extends DescriptionProps {
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

export interface ToolProps extends ItemProps {
  description?: string;
}

export interface TrinketProps {
  name: string;
}

export interface WeaponProps extends ItemProps {
  dices: number;
  hit_dice?: number;
  bonus: number;
  damage_type?: number;
  property: number[];
  melee_weapon: boolean;
  ranged_weapon: boolean;
  min_range?: number;
  max_range?: number;
}
