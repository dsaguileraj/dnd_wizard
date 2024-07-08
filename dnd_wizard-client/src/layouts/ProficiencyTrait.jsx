import { useEffect, useState } from 'react';
import { axiosGET } from '../api.js';
import { InputCheck, InputNumber, InputSelect } from '../components/forms.jsx';

export const fieldsProficiencyTrait = {
  armor_choices: 0,
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

export const ProficiencyTrait = ({ data, setData }) => {
  // Validators
  const [allArmorList, setAllArmorList] = useState(false);
  const [allLanguageList, setAllLanguageList] = useState(false);
  const [allSkillList, setAllSkillList] = useState(false);
  const [allToolList, setAllToolList] = useState(false);
  const [allWeaponList, setAllWeaponList] = useState(false);
  // Choices
  const [armors, setArmors] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    axiosGET(setArmors, 'actions', 'armor');
    axiosGET(setLanguages, 'rules', 'language');
    axiosGET(setSkills, 'rules', 'skill');
    axiosGET(setTools, 'actions', 'tool');
    axiosGET(setWeapons, 'actions', 'weapon');
  }, []);

  return (
    <>
      <h2>Proficiencies</h2>
      <h3>Armors</h3>
      <InputSelect
        label={'Armor proficiencies available'}
        field={data.armor_list}
        setField={event => setData({ ...data, armor_list: event })}
        options={armors}
        required={false}
      />
      <InputCheck
        label={'Gives proficient in this entire list?'}
        field={allArmorList}
        setField={event => {
          setAllArmorList(event);
          setData({ ...data, armor_choices: undefined });
        }}
        disabled={data.armor_list ? false : true}
      />
      {allArmorList ? setData({ ...data, armor_choices: undefined }) : setData({ ...data, armor_choices: 1 })}
      <InputNumber
        label={'Choices number'}
        field={data.armor_choices}
        setField={event => setData({ ...data, armor_choices: event })}
        max={data.armor_list.length()}
        min={1}
        disabled={allArmorList || data.armor_list ? false : true}
      />
      <h3>Languages</h3>
      <InputSelect
        label={'Language proficiencies available'}
        field={data.language_list}
        setField={event => setData({ ...data, language_list: event })}
        options={languages}
        required={false}
      />
      <InputCheck
        label={'Gives proficient in this entire list?'}
        field={allLanguageList}
        setField={event => {
          setAllLanguageList(event);
          setData({ ...data, language_choices: undefined });
        }}
        disabled={data.language_list ? false : true}
      />
      {allLanguageList ? setData({ ...data, language_choices: undefined }) : setData({ ...data, language_choices: 1 })}
      <InputNumber
        label={'Choices number'}
        field={data.language_choices}
        setField={event => setData({ ...data, language_choices: event })}
        max={data.language_list.length()}
        min={1}
        disabled={allLanguageList || data.armor_list ? false : true}
      />
      <h3>Skills</h3>
      <InputSelect
        label={'Skill proficiencies available'}
        field={data.skill_list}
        setField={event => setData({ ...data, skill_list: event })}
        options={skills}
        required={false}
      />
      <InputCheck
        label={'Gives proficient in this entire list?'}
        field={allSkillList}
        setField={event => {
          setAllSkillList(event);
          setData({ ...data, skill_choices: undefined });
        }}
        disabled={data.skill_list ? false : true}
      />
      {allSkillList ? setData({ ...data, skill_choices: undefined }) : setData({ ...data, skill_choices: 1 })}
      <InputNumber
        label={'Choices number'}
        field={data.skill_choices}
        setField={event => setData({ ...data, skill_choices: event })}
        max={data.skill_list.length()}
        min={1}
        disabled={allSkillList || data.skill_list ? false : true}
      />
      <h3>Tools</h3>
      <InputSelect
        label={'Tool proficiencies available'}
        field={data.tool_list}
        setField={event => setData({ ...data, tool_list: event })}
        options={tools}
        required={false}
      />
      <InputCheck
        label={'Gives proficient in this entire list?'}
        field={allToolList}
        setField={event => {
          setAllToolList(event);
          setData({ ...data, tool_choices: undefined });
        }}
        disabled={data.tool_list ? false : true}
      />
      {allToolList ? setData({ ...data, tool_choices: undefined }) : setData({ ...data, tool_choices: 1 })}
      <InputNumber
        label={'Choices number'}
        field={data.tool_choices}
        setField={event => setData({ ...data, tool_choices: event })}
        max={data.tool_list.length()}
        min={1}
        disabled={allToolList || data.tool_list ? false : true}
      />
      <h3>Weapons</h3>
      <InputSelect
        label={'Weapon proficiencies available'}
        field={data.weapon_list}
        setField={event => setData({ ...data, weapon_list: event })}
        options={weapons}
        required={false}
      />
      <InputCheck
        label={'Gives proficient in this entire list?'}
        field={allWeaponList}
        setField={event => {
          setAllWeaponList(event);
          setData({ ...data, weapon_choices: undefined });
        }}
        disabled={data.weapon_list ? false : true}
      />
      {allWeaponList ? setData({ ...data, weapon_choices: undefined }) : setData({ ...data, weapon_choices: 1 })}
      <InputNumber
        label={'Choices number'}
        field={data.weapon_choices}
        setField={event => setData({ ...data, weapon_choices: event })}
        max={data.weapon_list.length()}
        min={1}
        disabled={allWeaponList || data.weapon_list ? false : true}
      />
      <h3>Saving Throws</h3>
      <InputCheck
        label={'Strength'}
        field={data.str_st}
        setField={event => setData({ ...data, str_st: event })}
      />
      <InputCheck
        label={'Dexterity'}
        field={data.dex_st}
        setField={event => setData({ ...data, dex_st: event })}
      />
      <InputCheck
        label={'Constitution'}
        field={data.con_st}
        setField={event => setData({ ...data, con_st: event })}
      />
      <InputCheck
        label={'Intelligence'}
        field={data.int_st}
        setField={event => setData({ ...data, int_st: event })}
      />
      <InputCheck
        label={'Wisdom'}
        field={data.wis_st}
        setField={event => setData({ ...data, wis_st: event })}
      />
      <InputCheck
        label={'Charisma'}
        field={data.cha_st}
        setField={event => setData({ ...data, cha_st: event })}
      />
    </>
  );
};
