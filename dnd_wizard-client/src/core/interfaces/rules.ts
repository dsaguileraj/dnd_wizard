import {
  BaseProps,
  DescriptionProps,
  ImmResVulProps,
  ProficiencyTraitProps,
} from "@core/interfaces/core";

export interface CategoryProps extends DescriptionProps {
  item_type?: string;
}

export interface ConditionProps extends DescriptionProps {}

export interface CreatureTypeProps extends DescriptionProps {}

export interface DamageTypeProps extends DescriptionProps {
  subtype: string;
}

export interface FeatureProps
  extends DescriptionProps,
    ProficiencyTraitProps,
    ImmResVulProps {}

export interface ItemPropertyProps extends DescriptionProps {
  item_type?: string;
}

export interface LanguageProps extends DescriptionProps {}

export interface MagicSchoolProps extends DescriptionProps {}

export interface SkillProps extends BaseProps {
  stat: string;
}
