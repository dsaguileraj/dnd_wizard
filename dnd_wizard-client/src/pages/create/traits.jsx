import { useEffect, useState } from 'react';
import { axiosGET, axiosPOST } from '../../api.js';
import { ALIGMENTS, DICES, SIZES, STATS } from '../../core/choices.js';
import { Form, InputCheck, InputNumber, InputSelect, InputText } from '../../components/forms.jsx';
import { ImmResVul, fieldsImmResVul } from '../../layouts/ImmResVul.jsx';
import { ProficiencyTrait, fieldsProficiencyTrait } from '../../layouts/ProficiencyTrait.jsx';
import { PersonalCharacteristic, fieldsPersonalCharacteristic } from "../../layouts/PersonalCharacteristic.jsx";
import { spellcasterClass } from '../../core/utils.js';

export const RacePOST = () => {
  // Validators
  const [knowAll, setKnowAll] = useState(false);
  // Choices
  const [creatureTypes, setCreatureTypes] = useState([]);
  const [features, setFeatures] = useState([]);
  // Form
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
    known_spells: 0,
    spells_available: [],
  });

  useEffect(() => {
    axiosGET(setCreatureTypes, 'rules', 'creature_type');
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
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Race'}
    >
      <InputText
        label={'Name'}
        field={form.name}
        setField={event => setForm({ ...form, name: event })}
      />
      <InputSelect
        label={'Creature Type'}
        field={form.creature_type}
        setField={event => setForm({ ...form, creature_type: event })}
        options={creatureTypes}
        multiple={true}
      />
      <InputSelect
        label={'Aligment'}
        field={form.aligment}
        setField={event => setForm({ ...form, aligment: event })}
        options={ALIGMENTS}
        required={false}
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
      <InputNumber
        label={'Nature Armor'}
        field={form.nature_armor}
        setField={event => setForm({ ...form, nature_armor: event })}
        min={1}
        disabled={form.has_nature_armor ? false : true}
      />
      <h3>Spellcasting</h3>
      <InputCheck
        label={'Innate spellcaster?'}
        field={form.innate_spellcaster}
        setField={event => setForm({ ...form, innate_spellcaster: event })}
      />
      <InputSelect
        label={'Ability'}
        field={form.ability}
        setField={event => setForm({ ...form, ability: event })}
        options={STATS}
        disabled={!form.innate_spellcaster}
      />
      <InputSelect
        label={'Spells Available'}
        field={form.spells_available}
        setField={event => setForm({ ...form, spells_available: event })}
        options={spells}
        disabled={!form.innate_spellcaster}
      />
      <InputCheck
        label={'Know evety spell on the list?'}
        field={knowAll}
        setField={setKnowAll}
        disabled={form.spells_available ? false : true}
      />
      {knowAll ? setForm({ ...form, known_spells: undefined }) : setForm({ ...form, known_spells: 1 })}
      <InputNumber
        label={'Known Spells'}
        field={form.known_spells}
        setField={event => setForm({ ...form, known_spells: event })}
        max={form.spells_available.length()}
        min={1}
        disabled={!form.innate_spellcaster || knowAll || form.spells_available ? true : false}
      />
    </Form>
  );
};

export const EntityClassPOST = () => {
  const [spells, setSpells] = useState([]);
  const [form, setForm] = useState({
    ...fieldsProficiencyTrait,
    name: '',
    hit_dice: DICES[0].value,
    innate_spellcaster: false,
    ability: undefined,
    spell_list: [],
  });

  useEffect(() => axiosGET(setSpells, 'actions', 'spell'), []);

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/class/',
      form,
      setForm({
        ...fieldsProficiencyTrait,
        name: '',
        hit_dice: DICES[0].value,
        innate_spellcaster: false,
        ability: undefined,
        spell_list: [],
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Class'}
    >
      <InputText
        label={'Name'}
        field={form.name}
        setField={event => setForm({ ...form, name: event })}
      />
      <ProficiencyTrait
        data={form}
        setData={setForm}
      />
      <h3>Spellcasting</h3>
      <InputCheck
        label={'Innate spellcaster?'}
        field={form.innate_spellcaster}
        setField={event => setForm({ ...form, innate_spellcaster: event })}
      />
      <InputSelect
        label={'Ability'}
        field={form.ability}
        setField={event => setForm({ ...form, ability: event })}
        options={STATS}
        disabled={!form.innate_spellcaster}
      />
      <InputSelect
        label={'Spells List'}
        field={form.spell_list}
        setField={event => setForm({ ...form, spell_list: event })}
        options={spells}
        disabled={!form.innate_spellcaster}
      />
    </Form>
  );
};

export const ProgressTablePOST = () => {
  // Choices
  const [classes, setClasses] = useState([]);
  const [features, setFeatures] = useState([]);
  // Form
  const [form, setForm] = useState({
    entity_class: 1,
    level: 1,
    features: [],
    known_cantrips: 0,
    known_spells: 0,
    spell_slot_1: 0,
    spell_slot_2: 0,
    spell_slot_3: 0,
    spell_slot_4: 0,
    spell_slot_5: 0,
    spell_slot_6: 0,
    spell_slot_7: 0,
    spell_slot_8: 0,
    spell_slot_9: 0,
  });

  useEffect(() => {
    axiosGET(setClasses, 'traits', 'class');
    axiosGET(setFeatures, 'rules', 'feature');
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/class_table/',
      form,
      setForm({
        entity_class: 1,
        level: 1,
        features: [],
        known_cantrips: 0,
        known_spells: 0,
        spell_slot_1: 0,
        spell_slot_2: 0,
        spell_slot_3: 0,
        spell_slot_4: 0,
        spell_slot_5: 0,
        spell_slot_6: 0,
        spell_slot_7: 0,
        spell_slot_8: 0,
        spell_slot_9: 0,
      })
    );
  };

  const isSpellcaster = spellcasterClass(classes, form.entity_class);

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Progress Table'}
    >
      <InputSelect
        label={'Select Class'}
        field={form.entity_class}
        setField={event => setForm({ ...form, entity_class: event })}
        options={classes}
      />
      <InputNumber
        label={'Level'}
        field={form.level}
        setField={event => setForm({ ...form, level: event })}
        min={1}
      />
      <InputSelect
        label={'Features'}
        field={form.features}
        setField={event => setForm({ ...form, features: event })}
        options={features}
        multiple={true}
        required={false}
      />
      <h2>Spellcasting</h2>
      <InputNumber
        label={'Known Cantrips'}
        field={form.known_cantrips}
        setField={event => setForm({ ...form, known_cantrips: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Known Spells'}
        field={form.known_spells}
        setField={event => setForm({ ...form, known_spells: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 1 Spells'}
        field={form.spell_slot_1}
        setField={event => setForm({ ...form, spell_slot_1: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 2 Spells'}
        field={form.spell_slot_2}
        setField={event => setForm({ ...form, spell_slot_2: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 3 Spells'}
        field={form.spell_slot_3}
        setField={event => setForm({ ...form, spell_slot_3: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 4 Spells'}
        field={form.spell_slot_4}
        setField={event => setForm({ ...form, spell_slot_4: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 5 Spells'}
        field={form.spell_slot_5}
        setField={event => setForm({ ...form, spell_slot_5: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 6 Spells'}
        field={form.spell_slot_6}
        setField={event => setForm({ ...form, spell_slot_6: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 7 Spells'}
        field={form.spell_slot_7}
        setField={event => setForm({ ...form, spell_slot_7: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 8 Spells'}
        field={form.spell_slot_8}
        setField={event => setForm({ ...form, spell_slot_8: event })}
        disabled={!isSpellcaster}
      />
      <InputNumber
        label={'Level 9 Spells'}
        field={form.spell_slot_9}
        setField={event => setForm({ ...form, spell_slot_9: event })}
        disabled={!isSpellcaster}
      />
    </Form>
  );
};

export const BackgroundPOST = () => {
  // Choices
  const [features, setFeatures] = useState([]);
  // Form
  const [form, setForm] = useState({
    ...fieldsProficiencyTrait,
    name: '',
    features: [],
  });

  useEffect(() => axiosGET(setFeatures, 'rules', 'feature'), []);

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/background/',
      form,
      setForm({
        ...fieldsProficiencyTrait,
        name: '',
        features: [],
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Background'}
    >
      <InputText
        label={'Name'}
        field={form.name}
        setField={event => setForm({ ...form, name: event })}
      />
      <ProficiencyTrait
        data={form}
        setData={setForm}
      />
      <InputSelect
        label={'Features'}
        field={form.features}
        setField={event => setForm({ ...form, features: event })}
        options={features}
        multiple={true}
        required={false}
      />
    </Form>
  );
};

export const BondPOST = () => {
  const [form, setForm] = useState({
    ...fieldsPersonalCharacteristic,
  })

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/bond/',
      form,
      setForm({
        ...fieldsPersonalCharacteristic,
      })
    )
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Bond'}
    >
      <PersonalCharacteristic
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const FlawPOST = () => {
  const [form, setForm] = useState({
    ...fieldsPersonalCharacteristic,
  })

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/flaw/',
      form,
      setForm({
        ...fieldsPersonalCharacteristic,
      })
    )
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Flaw'}
    >
      <PersonalCharacteristic
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const IdealPOST = () => {
  const [form, setForm] = useState({
    ...fieldsPersonalCharacteristic,
  })

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/ideal/',
      form,
      setForm({
        ...fieldsPersonalCharacteristic,
      })
    )
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Ideal'}
    >
      <PersonalCharacteristic
        data={form}
        setData={setForm}
      />
    </Form>
  );
};

export const PersonalityPOST = () => {
  const [form, setForm] = useState({
    ...fieldsPersonalCharacteristic,
  })

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/traits/personality/',
      form,
      setForm({
        ...fieldsPersonalCharacteristic,
      })
    )
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Personality'}
    >
      <PersonalCharacteristic
        data={form}
        setData={setForm}
      />
    </Form>
  );
};
