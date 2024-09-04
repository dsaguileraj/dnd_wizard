import React, { useEffect, useState } from "react";
import { armorURL, toolURL, weaponURL } from "@api/actions";
import { axiosGET } from "@api/core";
import { languageURL, skillURL } from "@api/rules";
import InputCheck from "@components/forms/InputCheck";
import InputNumber from "@components/forms/InputNumber";
import Select from "@components/forms/Select";
import { ArmorProps, ToolProps, WeaponProps } from "@core/interfaces/actions";
import { ProficiencyTraitProps } from "@core/interfaces/core";
import { LanguageProps, SkillProps } from "@core/interfaces/rules";
import { getOptions } from "@utils/forms";

export const PROFICIENCY_TRAIT: ProficiencyTraitProps = {
  armor_choices: 0,
  armor_list: [],
  language_choices: 0,
  language_list: [],
  skill_choices: 0,
  skill_list: [],
  tool_choices: 0,
  tool_list: [],
  weapon_choices: 0,
  weapon_list: [],
  str_st: false,
  dex_st: false,
  con_st: false,
  int_st: false,
  wis_st: false,
  cha_st: false,
};

interface Props {
  value: ProficiencyTraitProps;
  setValue: (value: ProficiencyTraitProps) => void;
}

export const ProficiencyTrait: React.FC<Props> = ({ value, setValue }) => {
  const [armors, setArmors] = useState<ArmorProps[]>([]);
  const [languages, setLanguages] = useState<LanguageProps[]>([]);
  const [skills, setSkills] = useState<SkillProps[]>([]);
  const [tools, setTools] = useState<ToolProps[]>([]);
  const [weapons, setWeapons] = useState<WeaponProps[]>([]);

  useEffect(() => {
    axiosGET(armorURL, setArmors);
    axiosGET(languageURL, setLanguages);
    axiosGET(skillURL, setSkills);
    axiosGET(toolURL, setTools);
    axiosGET(weaponURL, setWeapons);
  }, []);

  return (
    <>
      <h3>Proficiencies</h3>
      <h4>Armors</h4>
      <Select
        label={"Proficiencies Available"}
        value={value.armor_list}
        setValue={setValue}
        options={getOptions(armors)}
        disabled={value.armor_choices ? false : true}
      />
      <InputNumber
        label={"Choices Number"}
        value={value.armor_choices}
        setValue={setValue}
        min={0}
        max={value.armor_list.length}
      />
      <h4>Languages</h4>
      <Select
        label={"Proficiencies Available"}
        value={value.language_list}
        setValue={setValue}
        options={getOptions(languages)}
        disabled={value.language_choices ? false : true}
      />
      <InputNumber
        label={"Choices Number"}
        value={value.language_choices}
        setValue={setValue}
        min={0}
        max={value.language_list.length}
      />
      <h4>Skills</h4>
      <Select
        label={"Proficiencies Available"}
        value={value.skill_list}
        setValue={setValue}
        options={getOptions(skills)}
        disabled={value.skill_choices ? false : true}
      />
      <InputNumber
        label={"Choices Number"}
        value={value.skill_choices}
        setValue={setValue}
        min={0}
        max={value.skill_list.length}
      />
      <h4>Tools</h4>
      <Select
        label={"Proficiencies Available"}
        value={value.tool_list}
        setValue={setValue}
        options={getOptions(tools)}
        disabled={value.tool_choices ? false : true}
      />
      <InputNumber
        label={"Choices Number"}
        value={value.tool_choices}
        setValue={setValue}
        min={0}
        max={value.tool_list.length}
      />
      <h4>Weapons</h4>
      <Select
        label={"Proficiencies Available"}
        value={value.weapon_list}
        setValue={setValue}
        options={getOptions(weapons)}
        disabled={value.weapon_choices ? false : true}
      />
      <InputNumber
        label={"Choices Number"}
        value={value.weapon_choices}
        setValue={setValue}
        min={0}
        max={value.weapon_list.length}
      />
      <h3>Saving Throws</h3>
      <InputCheck label={"STR"} value={value.str_st} setValue={setValue} />
      <InputCheck label={"DEX"} value={value.dex_st} setValue={setValue} />
      <InputCheck label={"CON"} value={value.con_st} setValue={setValue} />
      <InputCheck label={"INT"} value={value.int_st} setValue={setValue} />
      <InputCheck label={"WIS"} value={value.wis_st} setValue={setValue} />
      <InputCheck label={"CHA"} value={value.cha_st} setValue={setValue} />
    </>
  );
};
