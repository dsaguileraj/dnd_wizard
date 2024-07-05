import { InputText, InputTextArea } from '../components/forms.jsx';

export const fieldsDescriptionModel = {
  name: '',
  description: '',
};

export const DescriptionModel = ({ data, setData }) => {
  return (
    <>
      <InputText
        label={'Name'}
        field={data.name}
        setField={event => setData({ ...data, name: event })}
      />
      <InputTextArea
        label={'Description'}
        field={data.description}
        setField={event => setData({ ...data, description: event })}
      />
    </>
  );
};
