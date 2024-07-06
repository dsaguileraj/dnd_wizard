import { useEffect, useState } from 'react';
import { axiosGET, axiosPOST } from '../../api.js';
import { ALIGMENTS, SIZES, STATS } from '../../core/choices.js';
import { Form, InputCheck, InputNumber, InputSelect, InputText } from '../../components/forms.jsx';
import { ImmResVul, fieldsImmResVul } from '../../layouts/ImmResVul.jsx';
import { ProficiencyTrait, fieldsProficiencyTrait } from '../../layouts/ProficiencyTrait.jsx';

export const RacePOST = () => {
  const [form, setForm] = useState({
    ...fieldsImmResVul,
    ...fieldsProficiencyTrait,
    name: '',
    creature_type: [],
    aligment: undefined,
    is_playable: false,
    // Ability Socre Incresae
    str_increase: 0,
    dex_increase: 0,
    con_increase: 0,
    int_increase: 0,
    wis_increase: 0,
    cha_increase: 0,
    // Racial Traits
    size: SIZES[0].value,
    features: [],
    // Armor Class
    has_nature_armor: false,
    nature_armor: 0,
    // Speed
    burrow: 0,
    climb: 0,
    fly: 0,
    swim: 0,
    walk: 0,
    // Spellcasting
    innate_spellcaster: false,
    ability: undefined,
    known_spells: undefined,
    spells_available: [],
  });
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axiosGET(setFeatures, 'rules', 'feature');
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/race/',
      form,
      setForm({
        ...fieldsImmResVul,
        ...fieldsProficiencyTrait,
        creature_type: [],
        aligment: undefined,
        is_playable: false,
        // Ability Socre Incresae
        str_increase: 0,
        dex_increase: 0,
        con_increase: 0,
        int_increase: 0,
        wis_increase: 0,
        cha_increase: 0,
        // Racial Traits
        size: SIZES[0].value,
        features: [],
        // Armor Class
        has_nature_armor: false,
        nature_armor: 0,
        // Speed
        burrow: 0,
        climb: 0,
        fly: 0,
        swim: 0,
        walk: 0,
        // Spellcasting
        innate_spellcaster: false,
        ability: undefined,
        known_spells: undefined,
        spells_available: [],
      })
    );
  };

  return (
    <Form>
      <InputText
        label={'Name'}
        field={form.name}
        setField={event => setForm({ ...form, name: event })}
      />
      <h2>Ability Socre Increase</h2>
      <InputNumber
        label={'Strength'}
        field={form.str_increase}
        setField={event => setForm({ ...form, str_increase: event })}
        max={5}
        min={-5}
      />
      <InputNumber
        label={'Dexterity'}
        field={form.dex_increase}
        setField={event => setForm({ ...form, dex_increase: event })}
        max={5}
        min={-5}
      />
      <InputNumber
        label={'Constitution'}
        field={form.con_increase}
        setField={event => setForm({ ...form, con_increase: event })}
        max={5}
        min={-5}
      />
      <InputNumber
        label={'Intelligence'}
        field={form.int_increase}
        setField={event => setForm({ ...form, int_increase: event })}
        max={5}
        min={-5}
      />
      <InputNumber
        label={'Wisdom'}
        field={form.wis_increase}
        setField={event => setForm({ ...form, wis_increase: event })}
        max={5}
        min={-5}
      />
      <InputNumber
        label={'Charisma'}
        field={form.cha_increase}
        setField={event => setForm({ ...form, cha_increase: event })}
        max={5}
        min={-5}
      />
      <h2>Racial Traits</h2>
      <InputSelect
        label={'Size'}
        field={form.size}
        setField={event => setForm({ ...form, size: event })}
        options={SIZES}
      />
      <InputSelect
        label={'Features'}
        field={form.features}
        setField={event => setForm({ ...form, features: event })}
        options={features}
        multiple={true}
        required={false}
      />
      <h3>Speed</h3>
      <InputNumber
        label={'Burrow'}
        field={form.burrow}
        setField={event => setForm({ ...form, burrow: event })}
      />
      <InputNumber
        label={'Climb'}
        field={form.climb}
        setField={event => setForm({ ...form, climb: event })}
      />
      <InputNumber
        label={'Fly'}
        field={form.fly}
        setField={event => setForm({ ...form, fly: event })}
      />
      <InputNumber
        label={'Swim'}
        field={form.swim}
        setField={event => setForm({ ...form, swim: event })}
      />
      <InputNumber
        label={'Walk'}
        field={form.walk}
        setField={event => setForm({ ...form, walk: event })}
      />
      <ImmResVul
        data={form}
        setData={setForm}
      />
      <ProficiencyTrait
        data={form}
        setData={setForm}
      />
      <h3>Armor Class</h3>
      <InputCheck
        label={'Has nature armor?'}
        field={form.has_nature_armor}
        setField={event => setForm({ ...form, has_nature_armor: event })}
      />
      {form.has_nature_armor && (
        <InputNumber
          label={'Nature Armor'}
          field={form.nature_armor}
          setField={event => setForm({ ...form, nature_armor: event })}
          min={1}
        />
      )}
      <h3>Spellcasting</h3>
      <InputCheck
        label={'Innate spellcaster?'}
        field={form.innate_spellcaster}
        setField={event => setForm({ ...form, innate_spellcaster: event })}
      />
      {form.innate_spellcaster && (
        <InputSelect
          label={'Ability'}
          field={form.ability}
          setField={event => setForm({ ...form, ability: event })}
          options={STATS}
        />
      )}
      {form.innate_spellcaster && (
        <InputNumber
          label={'Known Spells'}
          field={form.known_spells}
          setField={event => setForm({ ...form, known_spells: event })}
          min={1}
        />
      )}
      {form.innate_spellcaster && (
        <InputSelect
          label={'Spells Available'}
          field={form.spells_available}
          setField={event => setForm({ ...form, spells_available: event })}
          options={spells}
        />
      )}
    </Form>
  );
};
tty