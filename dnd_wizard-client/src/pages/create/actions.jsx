import { useEffect, useState } from 'react';
import { axiosInstance, getAllQuery } from '../../api.js';
import { Form, InputCheck, InputNumber, InputSelect, InputText, InputTextArea } from '../../components/forms.jsx';
import { COINS, MEASURE_MASS } from '../../core/choices.js';

export const AdventureGearPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState(undefined);
  const [categoryList, setCategoryList] = useState([]);
  const [cost, setCost] = useState(0);
  const [coin, setCoin] = useState('cp');
  const [weight, setWeight] = useState(0);
  const [weightMeasure, setWeightMeasure] = useState('lb');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getAllQuery(setCategoryList, 'rules', 'category');
  }, []);

  let categoryOptions = [{ value: undefined, label: '---' }];
  categoryList.forEach(object => categoryOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/actions/equipment/', {
        name: name,
        category: category,
        cost: cost,
        coin: coin,
        weight: weight,
        weight_measure: weightMeasure,
        description: description,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setCategory(undefined);
        setCost(0);
        setCoin('cp');
        setWeight(0);
        setWeightMeasure('lb');
        setDescription('');
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };
  return (
    <Form
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      header='Create Adventure Gear'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputSelect
        field={category}
        handleChange={setCategory}
        label='Category'
        options={categoryOptions}
      />
      <InputNumber
        field={cost}
        handleChange={setCost}
        label='Cost'
      />
      <InputSelect
        field={coin}
        handleChange={setCoin}
        label='Coin'
        options={COINS}
      />
      <InputNumber
        field={weight}
        handleChange={setWeight}
        label='Weight'
      />
      <InputSelect
        field={weightMeasure}
        handleChange={setWeightMeasure}
        label='Weight Measure'
        options={MEASURE_MASS}
      />
      <InputTextArea
        field={description}
        handleChange={setDescription}
        label='Description'
      />
    </Form>
  );
};

export const ArmorPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState(undefined);
  const [categoryList, setCategoryList] = useState([]);
  const [cost, setCost] = useState(0);
  const [coin, setCoin] = useState('cp');
  const [weight, setWeight] = useState(0);
  const [weightMeasure, setWeightMeasure] = useState('lb');
  const [armorClass, setArmorClass] = useState(0);
  const [dexBonus, setDexBonus] = useState(false);
  const [maxDexBonus, setMaxDexBonus] = useState(0);
  const [minStr, setMinStr] = useState(0);
  const [disadvantageStealth, setDisadvantageStealth] = useState(false);

  useEffect(() => {
    getAllQuery(setCategoryList, 'rules', 'category');
  }, []);

  let categoryOptions = [{ value: undefined, label: '---' }];
  categoryList.forEach(object => categoryOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/actions/armor/', {
        name: name,
        category: category,
        cost: cost,
        coin: coin,
        weight: weight,
        weight_measure: weightMeasure,
        armor_class: armorClass,
        dex_bonus: dexBonus,
        max_dex_bonus: maxDexBonus,
        min_str: minStr,
        disadvantage_stealth: disadvantageStealth,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setCategory(undefined);
        setCost(0);
        setCoin('cp');
        setWeight(0);
        setWeightMeasure('lb');
        setArmorClass(0);
        setDexBonus(false);
        setMaxDexBonus(0);
        setMinStr(0);
        setDisadvantageStealth(false);
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };
  return (
    <Form
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      header='Create Armor'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputSelect
        field={category}
        handleChange={setCategory}
        label='Category'
        options={categoryOptions}
      />
      <InputNumber
        field={cost}
        handleChange={setCost}
        label='Cost'
      />
      <InputSelect
        field={coin}
        handleChange={setCoin}
        label='Coin'
        options={COINS}
      />
      <InputNumber
        field={weight}
        handleChange={setWeight}
        label='Weight'
      />
      <InputSelect
        field={weightMeasure}
        handleChange={setWeightMeasure}
        label='Weight Measure'
        options={MEASURE_MASS}
      />
      <InputNumber
        field={armorClass}
        handleChange={setArmorClass}
        label='Armor Class (AC)'
      />
      <InputCheck
        handleChange={setDexBonus}
        label='DEX Bonus'
      />
      <InputNumber
        field={maxDexBonus}
        handleChange={setMaxDexBonus}
        label='Max DEX Bonus'
      />
      <InputNumber
        field={minStr}
        handleChange={setMinStr}
        label='Min. STR'
      />
      <InputCheck
        handleChange={setDisadvantageStealth}
        label='Stealth Disadvantage'
      />
    </Form>
  );
};

export const SpellPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [entityClass, setEntityClass] = useState(1);
  const [entityClassList, setEntityClassList] = useState([]);
  const [magicSchool, setMagicSchool] = useState(1);
  const [magicSchoolList, setMagicSchoolList] = useState([]);
  const [damageType, setDamageType] = useState(1);
  const [damageTypeList, setDamageTypeList] = useState([]);
  const [level, setLevel] = useState(0);
  const [isRitual, setIsRitual] = useState(false);
  const [verbal, setVerbal] = useState(false);
  const [somatic, setSomatic] = useState(false);
  const [material, setMaterial] = useState(false);
  const [materials, setMaterials] = useState('');
  const [spellRange, setSpellRange] = useState(0);
  const [castingTime, setCastingTime] = useState(0);
  const [castingMeasure, setCastingMeasure] = useState('a');
  const [needConcentration, setNeedConcentration] = useState(false);
  const [duration, setDuration] = useState(0);
  const [durationMeasure, setDurationMeasure] = useState('a');

  useEffect(() => {
    getAllQuery(setEntityClassList, 'traits', 'class');
    getAllQuery(setMagicSchoolList, 'rules', 'magic_school');
    getAllQuery(setDamageTypeList, 'rules', 'damage_type');
  }, []);

  let entityClassOptions = [];
  let magicSchoolOptions = [];
  let damageTypeOptions = [{ value: undefined, label: '---' }];
  entityClassList.forEach(object => entityClassOptions.push({ value: object.id, label: object.name }));
  magicSchoolList.forEach(object => magicSchoolOptions.push({ value: object.id, label: object.name }));
  damageTypeList.forEach(object => damageTypeOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/actions/spell/', {
        name: name,
        description: description,
        entity_class: entityClass,
        magic_school: magicSchool,
        damage_type: damageType,
        level: level,
        is_ritual: isRitual,
        verbal: verbal,
        somatic: somatic,
        material: material,
        materials: materials,
        spell_range: spellRange,
        casting_time: castingTime,
        casting_measure: castingMeasure,
        need_concentration: needConcentration,
        duration: duration,
        duration_measure: durationMeasure,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setDescription('');
        setEntityClass(1);
        setEntityClassList([]);
        setMagicSchool(1);
        setMagicSchoolList([]);
        setDamageType(1);
        setDamageTypeList([]);
        setLevel(0);
        setIsRitual(false);
        setVerbal(false);
        setSomatic(false);
        setMaterial(false);
        setMaterials('');
        setSpellRange(0);
        setCastingTime(0);
        setCastingMeasure('a');
        setNeedConcentration(false);
        setDuration(0);
        setDurationMeasure('a');
      });
  };
  return (
    <Form
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      header='Create Spell'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputTextArea
        field={description}
        handleChange={setDescription}
        label='Description'
      />
      <InputSelect
        field={entityClass}
        handleChange={setEntityClass}
        label='Classes'
        multiple={true}
        options={entityClassOptions}
      />
      <InputSelect
        field={magicSchool}
        handleChange={setMagicSchool}
        label='Magic School'
        options={magicSchoolOptions}
      />
      <InputSelect
        field={damageType}
        handleChange={setDamageType}
        label='Damage Type'
        options={damageTypeOptions}
      />
      <InputNumber
        field={level}
        handleChange={setLevel}
        label='Level'
        max={9}
      />
      <InputNumber
        field={spellRange}
        handleChange={setSpellRange}
        label='Range'
      />
      <h2>Components</h2>
      <InputCheck
        field={verbal}
        handleChange={setVerbal}
        label='Verbal'
      />
      <InputCheck
        field={somatic}
        handleChange={setSomatic}
        label='Somatic'
      />
      <InputCheck
        field={material}
        handleChange={setMaterial}
        label='Material'
      />
      {material && (
        <InputTextArea
          field={materials}
          handleChange={setMaterials}
          label='Materials Description'
        />
      )}
      <h2>Casting</h2>
      <InputCheck
        field={isRitual}
        handleChange={setIsRitual}
        label='Ritual'
      />
      <InputNumber
        field={castingTime}
        handleChange={setCastingTime}
        label='Time'
      />
      <InputNumber
        field={castingMeasure}
        handleChange={setCastingMeasure}
        label='Measure'
      />
      <h2>Duration</h2>
      <InputCheck
        field={needConcentration}
        handleChange={setNeedConcentration}
        label='Need Concentration?'
      />
      <InputNumber
        field={duration}
        handleChange={setDuration}
        label='Time'
      />
      <InputNumber
        field={durationMeasure}
        handleChange={setDurationMeasure}
        label='Measure'
      />
    </Form>
  );
};

export const ToolPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState(undefined);
  const [categoryList, setCategoryList] = useState([]);
  const [cost, setCost] = useState(0);
  const [coin, setCoin] = useState('cp');
  const [weight, setWeight] = useState(0);
  const [weightMeasure, setWeightMeasure] = useState('lb');
  const [description, setDescription] = useState('');

  useEffect(() => {
    getAllQuery(setCategoryList, 'rules', 'category');
  }, []);

  let categoryOptions = [{ value: undefined, label: '---' }];
  categoryList.forEach(object => categoryOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/actions/tool/', {
        name: name,
        category: category,
        cost: cost,
        coin: coin,
        weight: weight,
        weight_measure: weightMeasure,
        description: description,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setCategory(undefined);
        setCost(0);
        setCoin('cp');
        setWeight(0);
        setWeightMeasure('lb');
        setDescription('');
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };
  return (
    <Form
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      header='Create Adventure Gear'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputSelect
        field={category}
        handleChange={setCategory}
        label='Category'
        options={categoryOptions}
      />
      <InputNumber
        field={cost}
        handleChange={setCost}
        label='Cost'
      />
      <InputSelect
        field={coin}
        handleChange={setCoin}
        label='Coin'
        options={COINS}
      />
      <InputNumber
        field={weight}
        handleChange={setWeight}
        label='Weight'
      />
      <InputSelect
        field={weightMeasure}
        handleChange={setWeightMeasure}
        label='Weight Measure'
        options={MEASURE_MASS}
      />
      <InputTextArea
        field={description}
        handleChange={setDescription}
        label='Description'
      />
    </Form>
  );
};

export const TrinketPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/actions/trinket/', {
        name: name,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };
  return (
    <Form
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      header='Create Trinket'
    >
      <InputTextArea
        field={name}
        handleChange={setName}
        label='Name'
      />
    </Form>
  );
};

export const WeaponPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState(undefined);
  const [categoryList, setCategoryList] = useState([]);
  const [cost, setCost] = useState(0);
  const [coin, setCoin] = useState('cp');
  const [weight, setWeight] = useState(0);
  const [weightMeasure, setWeightMeasure] = useState('lb');
  const [hitDices, setHitDice] = useState(1);
  const [diceSides, setDiceSides] = useState(4);
  const [modifier, setModifier] = useState(0);
  const [damageType, setDamageType] = useState(undefined);
  const [damageTypeList, setDamageTypeList] = useState([]);
  const [property, setProperty] = useState(undefined);
  const [propertylist, setPropertyList] = useState([]);
  const [rangedWeapon, setRangedWeapon] = useState(false);
  const [normalRange, setNormalRange] = useState(0);
  const [maxRange, setMaxRange] = useState(0);

  useEffect(() => {
    getAllQuery(setCategoryList, 'traits', 'category');
    getAllQuery(setDamageTypeList, 'rules', 'damage_type');
    getAllQuery(setPropertyList, 'rules', 'property');
  }, []);

  let categoryOptions = [{ value: undefined, label: '---' }];
  let damageTypeOptions = [{ value: undefined, label: '---' }];
  let propertyOptions = [{ value: undefined, label: '---' }];
  categoryList.forEach(object => categoryOptions.push({ value: object.id, label: object.name }));
  damageTypeList.forEach(object => damageTypeOptions.push({ value: object.id, label: object.name }));
  propertylist.forEach(object => propertyOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/actions/tool/', {
        name: name,
        category: category,
        cost: cost,
        coin: coin,
        weight: weight,
        weight_measure: weightMeasure,
        hit_dices: hitDices,
        dice_sides: diceSides,
        modifier: modifier,
        damage_type: damageType,
        property: property,
        ranged_weapon: rangedWeapon,
        normal_range: normalRange,
        max_range: maxRange,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setCategory(undefined);
        setCost(0);
        setCoin('cp');
        setWeight(0);
        setWeightMeasure('lb');
        setHitDice(0);
        setDiceSides(0);
        setModifier(0);
        setDamageType(undefined);
        setDamageTypeList([]);
        setProperty(undefined);
        setPropertyList([]);
        setRangedWeapon(false);
        setNormalRange(0);
        setMaxRange(0);
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };
  return (
    <Form
      errorMessage={errorMessage}
      handleSubmit={handleSubmit}
      header='Create Weapon'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputSelect
        field={category}
        handleChange={setCategory}
        label='Category'
        options={categoryOptions}
      />
      <InputNumber
        field={cost}
        handleChange={setCost}
        label='Cost'
      />
      <InputSelect
        field={coin}
        handleChange={setCoin}
        label='Coin'
        options={COINS}
      />
      <InputNumber
        field={weight}
        handleChange={setWeight}
        label='Weight'
      />
      <InputSelect
        field={weightMeasure}
        handleChange={setWeightMeasure}
        label='Weight Measure'
        options={MEASURE_MASS}
      />
      <InputNumber
        field={hitDices}
        handleChange={setHitDice}
        label='Hit Dices'
      />
      {hitDices != 0 ? (
        <InputSelect
          field={diceSides}
          handleChange={setDiceSides}
          label='Dice Sides'
          options={[
            { value: 4, label: 'd4' },
            { value: 6, label: 'd6' },
            { value: 8, label: 'd8' },
            { value: 10, label: 'd10' },
            { value: 12, label: 'd12' },
          ]}
        />
      ) : (
        <InputSelect
          field={diceSides}
          handleChange={setDiceSides}
          label='Dice Sides'
          options={[{ value: 0, label: '---' }]}
        />
      )}
      <InputNumber
        field={modifier}
        handleChange={setModifier}
        label='Modifier'
      />
      <InputSelect
        field={damageType}
        handleChange={setDamageType}
        label='Damage Type'
        options={damageTypeOptions}
      />
      <InputSelect
        field={property}
        handleChange={setProperty}
        label='Properties'
        multiple={true}
        options={propertyOptions}
      />
      <InputCheck
        field={rangedWeapon}
        handleChange={setRangedWeapon}
        label='Ranged Weapon?'
      />
      {rangedWeapon && (
        <InputNumber
          field={normalRange}
          handleChange={setNormalRange}
          label='Normal Range'
        />
      )}
      {rangedWeapon && (
        <InputNumber
          field={maxRange}
          handleChange={setMaxRange}
          label='Max Range'
        />
      )}
    </Form>
  );
};
