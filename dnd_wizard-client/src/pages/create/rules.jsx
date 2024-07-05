import { useState } from 'react';
import { axiosPOST } from '../../api.js';
import { Form, InputSelect, InputText } from '../../components/forms.jsx';
import { DAMAGE_SUBTYPE, ITEM_TYPES, STATS } from '../../core/choices.js';
import { DescriptionModel, fieldsDescriptionModel } from '../../layouts/DescriptionModel.jsx';
import { ProficiencyTrait, fieldsProficiencyTrait } from '../../layouts/ProficiencyTrait.jsx';
import { ImmResVul, fieldsImmResVul } from '../../layouts/ImmResVul.jsx';

export const CategoryPOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
    item_type: ITEM_TYPES[0].value,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/category/',
      form,
      setForm({
        ...fieldsDescriptionModel,
        item_type: ITEM_TYPES[0].value,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Category'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
      <InputSelect
        label={'Item Type'}
        field={form.item_type}
        setField={event => setForm({ ...form, item_type: event })}
        options={ITEM_TYPES}
      />
    </Form>
  );
};

export const ConditionPOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/condition/',
      form,
      setForm({
        ...fieldsDescriptionModel,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Condition'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const CreatureTypePOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/creature_type/',
      form,
      setForm({
        ...fieldsDescriptionModel,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Creature Type'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const DamageTypePOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
    subtype: DAMAGE_SUBTYPE[0].value,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/damage_type/',
      form,
      setForm({
        ...fieldsDescriptionModel,
        subtype: DAMAGE_SUBTYPE[0].value,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Creature Type'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
      <InputSelect
        label={'Subtype'}
        field={form.subtype}
        setField={event => setForm({ ...form, subtype: event })}
        options={ITEM_TYPES}
      />
    </Form>
  );
};

export const FeaturePOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
    ...fieldsProficiencyTrait,
    ...fieldsImmResVul,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/feature/',
      form,
      setForm({
        ...fieldsDescriptionModel,
        ...fieldsProficiencyTrait,
        ...fieldsImmResVul,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Feature'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
      <ProficiencyTrait
        data={form}
        setData={setForm}
      />
      <ImmResVul
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const LanguagePOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/language/',
      form,
      setForm({
        ...fieldsDescriptionModel,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Language'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const MagicSchoolPOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/magic_school/',
      form,
      setForm({
        ...fieldsDescriptionModel,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Magic School'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const PropertyPOST = () => {
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
    item_type: ITEM_TYPES[0].value,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/property/',
      form,
      setForm({
        ...fieldsDescriptionModel,
        item_type: ITEM_TYPES[0].value,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Item Property'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
      <InputSelect
        label={'Item Type'}
        field={form.item_type}
        setField={event => setForm({ ...form, item_type: event })}
        options={ITEM_TYPES}
      />
    </Form>
  );
};

export const SkillPOST = () => {
  const [form, setForm] = useState({
    name: '',
    stat: STATS[0].value,
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/rules/skill/',
      form,
      setForm({
        name: '',
        stat: STATS[0].value,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Skill'}
    >
      <InputText
        label={'Name'}
        field={form.name}
        setField={event => setForm({ ...form, name: event })}
      />
      <InputSelect
        label={'Ability Socre'}
        field={form.stat}
        setField={event => setForm({ ...form, stat: event })}
        options={STATS}
      />
    </Form>
  );
};
