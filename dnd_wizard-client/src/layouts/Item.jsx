import { useEffect, useState } from 'react';
import { InputNumber, InputSelect, InputText } from '../components/forms.jsx';
import { axiosGET } from '../api.js';
import { COINS } from '../core/choices.js';

export const fieldsItem = {
  name: '',
  category: undefined,
  cost: 0,
  coing: undefined,
  weight: 0,
};

export const Item = ({ data, setData }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axiosGET(setCategories, 'rules', 'category');
  }, []);

  return (
    <>
      <InputText
        label={'Name'}
        field={data.name}
        setField={event => setData({ ...data, name: event })}
      />
      <InputSelect
        label={'Category'}
        field={data.category}
        setField={event => setData({ ...data, category: event })}
        options={categories}
        required={false}
      />
      <InputNumber
        label={'Cost'}
        field={data.cost}
        setField={event => setData({ ...data, cost: event })}
      />
      <InputSelect
        label={'Coin'}
        field={data.coin}
        setField={event => setData({ ...data, coin: event })}
        options={COINS}
        disabled={data.cost ? false : true}
      />
      <InputNumber
        label={'Weight (lb)'}
        field={data.weight}
        setField={event => setData({ ...data, weight: event })}
      />
    </>
  );
};
