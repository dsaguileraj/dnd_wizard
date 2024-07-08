import { useEffect, useState } from 'react';
import { InputSelect, InputTextArea } from '../components/forms.jsx';
import { axiosGET } from '../api.js';

export const fieldsPersonalCharacteristic = {
  background: 1,
  description: '',
};

export const PersonalCharacteristic = ({ data, setData }) => {
  // Choices
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => axiosGET(setBackgrounds, 'traits', 'background'), []);

  return (
    <>
      <InputSelect
        label={'Background'}
        field={data.background}
        setField={event => setData({ ...data, background: event })}
        options={backgrounds}
      />
      <InputTextArea
        label={'Description'}
        field={data.description}
        setField={event => setData({ ...data, description: event })}
      />
    </>
  );
};
