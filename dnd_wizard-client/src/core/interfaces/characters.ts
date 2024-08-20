import { Entity } from "./core";

export interface PlayableCharacter extends Entity {
  player: number;
  experience: number;
  inspiration: boolean;
  entity_class?: number;
  background?: number;
  bond?: number;
  flaw?: number;
  ideal?: number;
  personality?: number;
  adventure_gears?: number[];
  armor?: number[];
  spells?: number[];
  tools?: number[];
  trinkets?: number[];
  copper: number;
  silver: number;
  electrum: number;
  gold: number;
  platinum: number;
}

export interface NonPlayableCharacter extends Entity {
  challenge: number;
  legendary_creature: boolean;
  armor?: number;
  spells?: number[];
}
