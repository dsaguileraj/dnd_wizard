import { useEffect, useState } from 'react';
import { axiosGET } from '../api.js';
import { InputCheck, InputNumber, InputSelect, InputText } from '../components/forms.jsx';

export const fieldsProficiencyTrait = {
  armor_choices: undefined,
  armor_list: [],
  language_choices: undefined,
  language_list: [],
  skill_choices: undefined,
  skill_list: [],
  tool_choices: undefined,
  tool_list: [],
  weapon_choices: undefined,
  weapon_list: [],
  strength: false,
  dexterity: false,
  constitution: false,
  intelligence: false,
  wisdom: false,
  charisma: false,
};

export const ProficiencyTrait = ({ data, setData }) => {
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
      <InputNumber
        label={'Armor Choices'}
        field={data.armor_choices}
        setField={event => setData({ ...data, armor_choices: event })}
        required={false}
      />
      <InputSelect
        label={'Armor List'}
        field={data.armor_list}
        setField={event => setData({ ...data, armor_list: event })}
        options={armors}
        required={false}
      />
      <InputNumber
        label={'Language Choices'}
        field={data.language_choices}
        setField={event => setData({ ...data, language_choices: event })}
        required={false}
      />
      <InputSelect
        label={'Language List'}
        field={data.language_list}
        setField={event => setData({ ...data, language_list: event })}
        options={languages}
        required={false}
      />
      <InputNumber
        label={'Skill Choices'}
        field={data.skill_choices}
        setField={event => setData({ ...data, skill_choices: event })}
        required={false}
      />
      <InputSelect
        label={'Skill List'}
        field={data.skill_list}
        setField={event => setData({ ...data, skill_list: event })}
        options={skills}
        required={false}
      />
      <InputNumber
        label={'Tool Choices'}
        field={data.tool_choices}
        setField={event => setData({ ...data, tool_choices: event })}
        required={false}
      />
      <InputSelect
        label={'Tool List'}
        field={data.tool_list}
        setField={event => setData({ ...data, tool_list: event })}
        options={tools}
        required={false}
      />
      <InputNumber
        label={'Weapon Choices'}
        field={data.weapon_choices}
        setField={event => setData({ ...data, weapon_choices: event })}
        required={false}
      />
      <InputSelect
        label={'Weapon List'}
        field={data.weapon_list}
        setField={event => setData({ ...data, weapon_list: event })}
        options={weapons}
        required={false}
      />
      <h3>Saving Throws Proficiencies</h3>
      <InputCheck
        label={'Strength'}
        field={data.strength}
        setField={event => setData({ ...data, strength: event })}
      />
      <InputCheck
        label={'Dexterity'}
        field={data.dexterity}
        setField={event => setData({ ...data, strength: event })}
      />
      <InputCheck
        label={'Constitution'}
        field={data.constitution}
        setField={event => setData({ ...data, strength: event })}
      />
      <InputCheck
        label={'Intelligence'}
        field={data.intelligence}
        setField={event => setData({ ...data, strength: event })}
      />
      <InputCheck
        label={'Wisdom'}
        field={data.wisdom}
        setField={event => setData({ ...data, strength: event })}
      />
      <InputCheck
        label={'Charisma'}
        field={data.charisma}
        setField={event => setData({ ...data, strength: event })}
      />
    </>
  );
};
