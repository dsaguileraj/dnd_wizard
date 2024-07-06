import { useEffect, useState } from 'react';
import { InputNumber, InputSelect } from '../components/forms.jsx';
import { axiosGET } from '../api.js';

export const fieldsEntity = {
  race: undefined,
  hit_points: 1,
  str_score: 0,
  dex_score: 0,
  con_score: 0,
  int_score: 0,
  wis_socre: 0,
  cha_score: 0,
  spells: [],
  weapons: [],
};

export const Entity = ({ data, setData }) => {
  const [races, setRaces] = useState([]);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    axiosGET(setRaces, 'traits', 'race');
    axiosGET(setWeapons, 'actions', 'weapon');
  }, []);

  return (
    <>
      <InputSelect
        label={'Race'}
        field={data.race}
        setField={event => setData({ ...data, race: event })}
        options={races}
      />
      <InputNumber
        label={'Hit Points'}
        field={data.hit_points}
        setField={event => setData({ ...data, hit_points: event })}
      />
      <h2>Ability Score</h2>
      <InputNumber
        label={'Strength'}
        field={data.str_score}
        setField={event => setData({ ...data, str_score: event })}
        max={30}
      />
      <InputNumber
        label={'Dexterity'}
        field={data.dex_score}
        setField={event => setData({ ...data, dex_score: event })}
        max={30}
      />
      <InputNumber
        label={'Constitution'}
        field={data.con_score}
        setField={event => setData({ ...data, con_score: event })}
        max={30}
      />
      <InputNumber
        label={'Intelligence'}
        field={data.int_score}
        setField={event => setData({ ...data, int_score: event })}
        max={30}
      />
      <InputNumber
        label={'Wisdom'}
        field={data.wis_socre}
        setField={event => setData({ ...data, wis_socre: event })}
        max={30}
      />
      <InputNumber
        label={'Charisma'}
        field={data.cha_score}
        setField={event => setData({ ...data, cha_score: event })}
        max={30}
      />
      <h2>Actions</h2>
      <InputSelect
        label={'Weapons'}
        field={data.weapons}
        setField={event => setData({ ...data, weapons: event })}
        options={weapons}
        multiple={true}
      />
    </>
  );
};
