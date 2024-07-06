import { useEffect, useState } from 'react';
import { InputSelect } from '../components/forms.jsx';
import { axiosGET } from '../api.js';

export const fieldsImmResVul = {
  condition_immunity: [],
  damage_immunity: [],
  damage_resistance: [],
  damage_vulnerability: [],
};

export const ImmResVul = ({ data, setData }) => {
  const [conditions, setConditions] = useState([]);
  const [damageTypes, setDamageTypes] = useState([]);

  useEffect(() => {
    axiosGET(setConditions, 'rules', 'condition');
    axiosGET(setDamageTypes, 'rules', 'damage_type');
  }, []);

  return (
    <>
      <h3>Immunities, Resistances & Vulneravilities</h3>
      <InputSelect
        label={'Condition Immunity'}
        field={data.condition_immunity}
        setField={event => setData({ ...data, condition_immunity: event })}
        options={conditions}
        multiple={true}
        required={false}
      />
      <InputSelect
        label={'Damage Immunity'}
        field={data.damage_immunity}
        setField={event => setData({ ...data, damage_immunity: event })}
        options={damageTypes}
        multiple={true}
        required={false}
      />
      <InputSelect
        label={'Damage Resistance'}
        field={data.damage_resistance}
        setField={event => setData({ ...data, damage_resistance: event })}
        options={damageTypes}
        multiple={true}
        required={false}
      />
      <InputSelect
        label={'Damage Vulnerability'}
        field={data.damage_vulnerability}
        setField={event => setData({ ...data, damage_vulnerability: event })}
        options={damageTypes}
        multiple={true}
        required={false}
      />
    </>
  );
};
