import { useEffect, useState } from 'react';
import { axiosGET, axiosPOST } from '../../api.js';
import { Form, InputCheck, InputNumber, InputSelect, InputTextArea } from '../../components/forms.jsx';
import { Item, fieldsItem } from '../../layouts/Item.jsx';
import { DescriptionModel, fieldsDescriptionModel } from '../../layouts/DescriptionModel.jsx';
import { DICES, MEASURE_TIME } from '../../core/choices.js';

export const AdventureGearPOST = () => {
  const [form, setForm] = useState({
    ...fieldsItem,
    description: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/actions/equipment/',
      form,
      setForm({
        ...fieldsItem,
        description: '',
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Adventure Gear'}
    >
      <Item
        data={form}
        setData={setForm}
      />
      <InputTextArea
        label={'Description'}
        field={form.description}
        setField={event => setForm({ ...form, description: event })}
        required={false}
      />
    </Form>
  );
};

export const ArmorPOST = () => {
  // Choices
  const [creatureTypes, setCreatureTypes] = useState([]);
  const [properties, setProperties] = useState([]);
  // Form
  const [form, setForm] = useState({
    ...fieldsItem,
    armor_class: 0,
    gives_dex_bonus: false,
    dex_bonus: 0,
    required_str: 0,
    property: [],
    compatibility: [],
  });

  useEffect(() => {
    axiosGET(setCreatureTypes, 'rules', 'creature_type');
    axiosGET(setProperties, 'rules', 'property');
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/actions/armor/',
      form,
      setForm({
        ...fieldsItem,
        armor_class: 0,
        gives_dex_bonus: false,
        dex_bonus: 0,
        required_str: 0,
        property: [],
        compatibility: [],
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Armor'}
    >
      <Item
        data={form}
        setData={setForm}
      />
      <InputNumber
        label={'Armor Class (AC)'}
        field={form.armor_class}
        setField={event => setForm({ ...form, armor_class: event })}
      />
      <InputCheck
        label={'Gives DEX bonus?'}
        field={form.gives_dex_bonus}
        setField={event => setForm({ ...form, gives_dex_bonus: event })}
      />
      <InputNumber
        label={'DEX bonus'}
        field={form.dex_bonus}
        setField={event => setForm({ ...form, dex_bonus: event })}
        disabled={!form.gives_dex_bonus}
      />
      <InputNumber
        label={'Required STR'}
        field={form.required_str}
        setField={event => setForm({ ...form, required_str: event })}
      />
      <InputSelect
        label={'Property'}
        field={form.property}
        setField={event => setForm({ ...form, property: event })}
        options={properties}
        multiple={true}
        required={false}
      />
      <InputSelect
        label={'Compatible with'}
        field={form.compatibility}
        setField={event => setForm({ ...form, compatibility: event })}
        options={creatureTypes}
        multiple={true}
      />
    </Form>
  );
};

export const SpellPOST = () => {
  // Choices
  const [damageTypes, setDamageTypes] = useState([]);
  const [magicSchools, setMagicSchools] = useState([]);
  // Form
  const [form, setForm] = useState({
    ...fieldsDescriptionModel,
    magic_school: undefined,
    damage_type: undefined,
    level: 0,
    spell_range: 0,
    // Components
    verbal: false,
    somatic: false,
    material: false,
    materials: '',
    // Casting
    is_ritual: false,
    casting_time: 0,
    casting_measure: MEASURE_TIME[0].value,
    // Duration
    need_concentration: false,
    duration: 0,
    duration_measure: MEASURE_TIME[0].value,
  });

  useEffect(() => {
    axiosGET(setDamageTypes, 'rules', 'damage_type');
    axiosGET(setMagicSchools, 'rules', 'magic_school');
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/actions/spell/',
      form,
      setForm({
        ...fieldsDescriptionModel,
        magic_school: undefined,
        damage_type: undefined,
        level: 0,
        spell_range: 0,
        // Components
        verbal: false,
        somatic: false,
        material: false,
        materials: '',
        // Casting
        is_ritual: false,
        casting_time: 0,
        casting_measure: MEASURE_TIME[0].value,
        // Duration
        need_concentration: false,
        duration: 0,
        duration_measure: MEASURE_TIME[0].value,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Spell'}
    >
      <DescriptionModel
        data={form}
        setData={setForm}
      />
      <InputSelect
        label={'Magic School'}
        field={form.magic_school}
        setField={event => setForm({ ...form, magic_school: event })}
        options={magicSchools}
      />
      <InputSelect
        label={'Damage Type'}
        field={form.damage_type}
        setField={event => setForm({ ...form, damage_type: event })}
        options={damageTypes}
      />
      <InputNumber
        label={'Level'}
        field={form.level}
        setField={event => setForm({ ...form, level: event })}
        max={9}
      />
      <InputNumber
        label={'Range'}
        field={form.spell_range}
        setField={event => setForm({ ...form, spell_range: event })}
        min={-1}
      />
      <h2>Components</h2>
      <InputCheck
        label={'Verbal'}
        field={form.verbal}
        setField={event => setForm({ ...form, verbal: event })}
      />
      <InputCheck
        label={'Somatic'}
        field={form.somatic}
        setField={event => setForm({ ...form, somatic: event })}
      />
      <InputCheck
        label={'Material'}
        field={form.material}
        setField={event => setForm({ ...form, material: event })}
      />
      <InputTextArea
        label={'Materials'}
        field={form.materials}
        setField={event => setForm({ ...form, materials: event })}
        disabled={!form.material}
      />
      <h2>Casting</h2>
      <InputNumber
        label={'Time'}
        field={form.casting_time}
        setField={event => setForm({ ...form, casting_time: event })}
        min={-1}
      />
      <InputSelect
        label={'Measure'}
        field={form.casting_measure}
        setField={event => setForm({ ...form, casting_measure: event })}
        options={MEASURE_TIME}
      />
      <InputCheck
        label={'Is a ritual?'}
        field={form.is_ritual}
        setField={event => setForm({ ...form, is_ritual: event })}
      />
      <h2>Duration</h2>
      <InputNumber
        label={'Time'}
        field={form.duration}
        setField={event => setForm({ ...form, duration: event })}
      />
      <InputSelect
        label={'Measure'}
        field={form.duration_measure}
        setField={event => setForm({ ...form, duration_measure: event })}
        options={MEASURE_TIME}
      />
      <InputCheck
        label={'Need concentration?'}
        field={form.need_concentration}
        setField={event => setForm({ ...form, need_concentration: event })}
      />
    </Form>
  );
};

export const ToolPOST = () => {
  const [form, setForm] = useState({
    ...fieldsItem,
    description: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/actions/tool/',
      form,
      setForm({
        ...fieldsItem,
        description: '',
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Tool'}
    >
      <Item
        data={form}
        setData={setForm}
      />
      <InputTextArea
        label={'Description'}
        field={form.description}
        setField={event => setForm({ ...form, description: event })}
        required={false}
      />
    </Form>
  );
};

export const TrinketPOST = () => {
  const [form, setForm] = useState({
    name: '',
  });

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST('/actions/trinket/', form, setForm({ name: '' }));
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Trinket'}
    >
      <InputTextArea
        label={'Description'}
        field={form.name}
        setField={event => setForm({ ...form, name: event })}
      />
    </Form>
  );
};

export const WeaponPOST = () => {
  // Choices
  const [damageTypes, setDamageTypes] = useState([]);
  const [properties, setProperties] = useState([]);
  // Form
  const [form, setForm] = useState({
    ...fieldsItem,
    dices: 0,
    hit_dice: undefined,
    bonus: 0,
    damage_type: undefined,
    property: [],
    melee_weapon: false,
    melee_range: undefined,
    ranged_weapon: false,
    min_range: undefined,
    max_range: undefined,
  });

  useEffect(() => {
    axiosGET(setDamageTypes, 'rules', 'damage_type');
    axiosGET(setProperties, 'rules', 'property');
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axiosPOST(
      '/actions/weapon/',
      form,
      setForm({
        ...fieldsItem,
        dices: 0,
        hit_dice: undefined,
        bonus: 0,
        damage_type: undefined,
        property: [],
        melee_weapon: false,
        melee_range: undefined,
        ranged_weapon: false,
        min_range: undefined,
        max_range: undefined,
      })
    );
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      header={'Create Weapon'}
    >
      <Item
        data={form}
        setData={setForm}
      />
      <InputNumber
        label={'Dices'}
        field={form.dices}
        setField={event => setForm({ ...form, dices: event })}
      />
      <InputSelect
        label={'Hit Dice'}
        field={form.hit_dice}
        setField={event => setForm({ ...form, hit_dice: event })}
        options={DICES}
        disabled={!form.dices}
      />
      <InputNumber
        label={'Bonus'}
        field={form.bonus}
        setField={event => setForm({ ...form, bonus: event })}
      />
      <InputSelect
        label={'Damage Type'}
        field={form.damage_type}
        setField={event => setForm({ ...form, damage_type: event })}
        required={false}
      />
      <InputSelect
        label={'Property'}
        field={form.property}
        setField={event => setForm({ ...form, property: event })}
        multiple={true}
        required={false}
      />
      <InputCheck
        label={'Is a melee weapon?'}
        field={form.melee_weapon}
        setField={event => setForm({ ...form, melee_weapon: event })}
      />
      <InputNumber
        label={'Melee range'}
        field={form.melee_range}
        setField={event => setForm({ ...form, melee_range: event })}
        min={1}
        disabled={!form.melee_weapon}
      />
      <InputCheck
        label={'Is a ranged weapon?'}
        field={form.ranged_weapon}
        setField={event => setForm({ ...form, ranged_weapon: event })}
      />
      <InputNumber
        label={'Min range'}
        field={form.min}
        setField={event => setForm({ ...form, min: event })}
        min={2}
        disabled={!form.ranged_weapon}
      />
      <InputNumber
        label={'Max range'}
        field={form.max_range}
        setField={event => setForm({ ...form, max_range: event })}
        min={3}
        disabled={!form.ranged_weapon}
      />
    </Form>
  );
};
