import { DescriptionProps } from "@core/interfaces/core";

export interface MatchProps extends DescriptionProps {
  dungeon_master?: number;
  characters: number[];
  create_at?: Date;
}
