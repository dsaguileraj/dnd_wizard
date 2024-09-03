import { DescriptionInterface } from "@core/interfaces/core";

export interface Match extends DescriptionInterface {
  dungeon_master?: number;
  characters: number[];
  create_at?: Date;
}
