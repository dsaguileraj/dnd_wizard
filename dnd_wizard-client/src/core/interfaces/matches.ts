import { DescriptionInterface } from "./core";

export interface Match extends DescriptionInterface {
  dungeon_master?: number;
  characters: number[];
  create_at?: Date;
}
