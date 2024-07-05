import { useEffect, useState } from 'react';
import { axiosInstance, getAllQuery } from '../../api.js';
import { Form, InputCheck, InputNumber, InputSelect, InputText, InputTextArea } from '../../components/forms.jsx';
import { SIZES } from '../../core/choices.js';

export const BackgroundPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState([1]);
  const [skillsList, setSkillsList] = useState([]);
  const [languages, setLanguage] = useState(0);
  const [maxToolProficiencies, setMaxToolProficiencies] = useState(1);
  const [toolProficiencies, setToolProficiencies] = useState([1]);
  const [toolProficienciesList, setToolProficienciesList] = useState([]);

  useEffect(() => {
    getAllQuery(setSkillsList, 'rules', 'skill');
    getAllQuery(setToolProficienciesList, 'weapon', 'tool');
  }, []);

  let skillsOptions = [];
  let toolProficienciesOptions = [];
  skillsList.forEach(object => skillsOptions.push({ value: object.id, label: object.name }));
  toolProficienciesList.forEach(object => toolProficienciesOptions.push({ value: object.id, label: object.name }));

  const handleChange = event => {
    event.preventDefault();
    axiosInstance
      .post('/traits/background/', {
        name: name,
        skills: skills,
        language_choices: languages,
        max_tool_proficiencies_choices: maxToolProficiencies,
        tool_proficiencies_choices: toolProficiencies,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setSkills([1]);
        setSkillsList([]);
        setLanguage(0);
        setMaxToolProficiencies(0);
        setToolProficiencies([1]);
        setToolProficienciesList([]);
      })
      .catch(error => {
        console.log(error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };
  return (
    <Form
      errorMessage={errorMessage}
      handleSubmit={handleChange}
      header='Create Background'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputSelect
        field={skills}
        handleChange={setSkills}
        label='Skills'
        multiple={true}
        options={skillsOptions}
      />
      <InputNumber
        field={languages}
        handleChange={setLanguage}
        label='Language Choices'
        max={2}
      />
      <InputNumber
        field={maxToolProficiencies}
        handleChange={setMaxToolProficiencies}
        label='Max Tool Proficiencies Choices'
        max={2}
        min={1}
      />
      <InputSelect
        field={toolProficiencies}
        handleChange={setToolProficiencies}
        label='Available Tool Proficiencies'
        multiple={true}
        options={toolProficienciesOptions}
      />
    </Form>
  );
};

export const BondPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [background, setBackground] = useState([1]);
  const [backgroundList, setBackgroundList] = useState([]);

  useEffect(() => {
    getAllQuery(setBackgroundList, 'traits', 'background');
  }, []);

  let backgroundOptions = [];
  backgroundList.forEach(object => backgroundOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/traits/bond/', {
        background: background,
        name: name,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setBackground([1]);
        setBackgroundList([]);
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
      header='Create Bond'
    >
      <InputTextArea
        field={name}
        handleChange={setName}
        label='Description'
      />
      <InputSelect
        field={background}
        handleChange={setBackground}
        label='Background'
        multiple={true}
        options={backgroundOptions}
      />
    </Form>
  );
};

export const EntityCassPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [hitDice, setHitDice] = useState(4);
  const [stSTR, setStSTR] = useState(false);
  const [stDEX, setStDEX] = useState(false);
  const [stCON, setStCON] = useState(false);
  const [stINT, setStINT] = useState(false);
  const [stWIS, setStWIS] = useState(false);
  const [stCHA, setStCHA] = useState(false);
  const [canSpellCasting, setCanSpellCasting] = useState(false);
  const [armorProficiencies, setArmorProficiencies] = useState([1]);
  const [armorProficienciesList, setArmorProficienciesList] = useState([]);
  const [weaponProficiencies, setWeaponProficiencies] = useState([1]);
  const [weaponProficienciesList, setWeaponProficienciesList] = useState([]);
  const [maxToolProficiencies, setMaxToolProficiencies] = useState(0);
  const [toolProficiencies, setToolProficiencies] = useState(undefined);
  const [toolProficienciesList, setToolProficienciesList] = useState([]);
  const [maxSkills, setMaxSkills] = useState(1);
  const [skills, setSkills] = useState([1]);
  const [skillsList, setSkillsList] = useState([]);

  useEffect(() => {
    getAllQuery(setArmorProficienciesList, 'actions', 'armor');
    getAllQuery(setToolProficienciesList, 'actions', 'tool');
    getAllQuery(setWeaponProficienciesList, 'actions', 'weapon');
    getAllQuery(setSkillsList, 'rules', 'skill');
  }, []);

  let armorProficienciesOptions = [];
  let toolProficienciesOptions = [{ value: undefined, label: '---' }];
  let weaponProficienciesOptions = [];
  let skillsOptions = [];
  armorProficienciesList.forEach(object => armorProficienciesOptions.push({ value: object.id, label: object.name }));
  toolProficienciesList.forEach(object => toolProficienciesOptions.push({ value: object.id, label: object.name }));
  weaponProficienciesList.forEach(object => weaponProficienciesOptions.push({ value: object.id, label: object.name }));
  skillsList.forEach(object => skillsOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/traits/class/', {
        name: name,
        hit_dice: hitDice,
        st_str: stSTR,
        st_dex: stDEX,
        st_con: stCON,
        st_int: stINT,
        st_wis: stWIS,
        st_cha: stCHA,
        armor_proficiencies: armorProficiencies,
        weapon_proficiencies: weaponProficiencies,
        can_spellcasting: canSpellCasting,
        max_tool_proficiencies_choices: maxToolProficiencies,
        tool_proficiencies_choices: toolProficiencies,
        max_skill_choices: maxSkills,
        skill_choices: skills,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setHitDice(4);
        setStSTR(false);
        setStDEX(false);
        setStCON(false);
        setStINT(false);
        setStWIS(false);
        setStCHA(false);
        setCanSpellCasting(false);
        setArmorProficiencies([1]);
        setArmorProficienciesList([]);
        setWeaponProficiencies([1]);
        setWeaponProficienciesList([]);
        setMaxToolProficiencies(0);
        setToolProficiencies(undefined);
        setToolProficienciesList([]);
        setMaxSkills(1);
        setSkills([1]);
        setSkillsList([]);
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
      header='Create Class'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputSelect
        field={hitDice}
        handleChange={setHitDice}
        label='Hit Dice'
        options={[
          { value: 6, label: 'd6' },
          { value: 8, label: 'd8' },
          { value: 10, label: 'd10' },
          { value: 12, label: 'd12' },
        ]}
      />
      <h2>Saving Throws</h2>
      <InputCheck
        field={stSTR}
        handleChange={setStSTR}
        label='STR'
      />
      <InputCheck
        field={stDEX}
        handleChange={setStDEX}
        label='DEX'
      />
      <InputCheck
        field={stCON}
        handleChange={setStCON}
        label='CON'
      />
      <InputCheck
        field={stINT}
        handleChange={setStINT}
        label='INT'
      />
      <InputCheck
        field={stWIS}
        handleChange={setStWIS}
        label='WIS'
      />
      <InputCheck
        field={stCHA}
        handleChange={setStCHA}
        label='CHA'
      />
      <h2>Traits</h2>
      <InputCheck
        field={canSpellCasting}
        handleChange={setCanSpellCasting}
        label='Can Spellcasting?'
      />
      <InputSelect
        field={armorProficiencies}
        handleChange={setArmorProficiencies}
        label='Armor Proficiencies'
        multiple={true}
        options={armorProficienciesOptions}
      />
      <InputSelect
        field={weaponProficiencies}
        handleChange={setWeaponProficiencies}
        label='Weapon Proficiencies'
        multiple={true}
        options={weaponProficienciesOptions}
      />
      <InputNumber
        field={maxToolProficiencies}
        handleChange={setMaxToolProficiencies}
        label='Max Tool Prociencies'
        max={3}
      />
      {maxToolProficiencies != 0 && (
        <InputSelect
          field={toolProficiencies}
          handleChange={setToolProficiencies}
          label='Tool Proficiencies'
          multiple={true}
          options={toolProficienciesOptions}
        />
      )}
      <InputNumber
        field={maxSkills}
        handleChange={setMaxSkills}
        label='Max Skills'
        max={3}
        min={1}
      />
      <InputSelect
        field={skills}
        handleChange={setSkills}
        label='Skills'
        multiple={true}
        options={skillsOptions}
      />
    </Form>
  );
};

export const RacePostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [isPlayable, setIsPlayable] = useState(false);
  const [inhSTR, setInhSTR] = useState(0);
  const [inhDEX, setInhDEX] = useState(0);
  const [inhCON, setInhCON] = useState(0);
  const [inhINT, setInhINT] = useState(0);
  const [inhWIS, setInhWIS] = useState(0);
  const [inhCHA, setInhCHA] = useState(0);
  const [size, setSize] = useState('XS');
  const [speed, setSpeed] = useState(0);
  const [damageImmunities, setDamageImmunities] = useState(undefined);
  const [damageResistances, setDamageResistances] = useState(undefined);
  const [damageVulnerabilities, setDamageVulnerabilities] = useState(undefined);
  const [damageTypes, setDamageTypes] = useState([]);
  const [conditionImmunities, setConditionImmunities] = useState(undefined);
  const [conditions, setConditions] = useState([]);
  const [maxLanguages, setMaxLanguages] = useState(0);
  const [languages, setLanguages] = useState(undefined);
  const [languagesList, setLanguagesList] = useState([]);
  const [features, setFeatures] = useState(undefined);
  const [featuresList, setFeaturesList] = useState([]);

  useEffect(() => {
    getAllQuery(setConditions, 'rules', 'condition');
    getAllQuery(setDamageTypes, 'rules', 'damage_type');
    getAllQuery(setFeaturesList, 'rules', 'feature');
    getAllQuery(setLanguagesList, 'rules', 'langauge');
  }, []);

  let conditionsOptions = [{ value: undefined, label: '---' }];
  let damageTypesOptions = [{ value: undefined, label: '---' }];
  let featuresOptions = [{ value: undefined, label: '---' }];
  let languagesOptions = [{ value: undefined, label: '---' }];
  conditions.forEach(object => conditionsOptions.push({ value: object.id, label: object.name }));
  damageTypes.forEach(object => damageTypesOptions.push({ value: object.id, label: object.name }));
  featuresList.forEach(object => featuresOptions.push({ value: object.id, label: object.name }));
  languagesList.forEach(object => languagesOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/traits/race/', {
        name: name,
        is_playable: isPlayable,
        inh_str: inhSTR,
        inh_dex: inhDEX,
        inh_con: inhCON,
        inh_int: inhINT,
        inh_wis: inhWIS,
        inh_cha: inhCHA,
        size: size,
        speed: speed,
        damage_immunities: damageImmunities,
        damage_resistances: damageResistances,
        damage_vulnerabilities: damageVulnerabilities,
        condition_immunities: conditionImmunities,
        language_choices: maxLanguages,
        languages: languages,
        features: features,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setIsPlayable(false);
        setInhSTR(0);
        setInhDEX(0);
        setInhCON(0);
        setInhINT(0);
        setInhWIS(0);
        setIntCHA(0);
        setSize('XS');
        setSpeed(0);
        setDamageImmunities(undefined);
        setDamageImmunitiesList([]);
        setDamageResistances(undefined);
        setDamageResistancesList([]);
        setDamageVulnerabilities(undefined);
        setDamageVulnerabilitiesList([]);
        setConditionImmunities(undefined);
        setConditionImmunitiesList([]);
        setMaxLanguages(0);
        setLanguages(undefined);
        setLanguagesList([]);
        setFeatures(undefined);
        setFeaturesList([]);
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
      header='Create Race'
    >
      <InputText
        field={name}
        handleChange={setName}
        label='Name'
      />
      <InputCheck
        field={isPlayable}
        handleChange={setIsPlayable}
        label='Playable?'
      />
      <h2>Inherited Stat Bonus</h2>
      <InputNumber
        field={inhSTR}
        handleChange={setInhSTR}
        label='STR'
        max={2}
      />
      <InputNumber
        field={inhDEX}
        handleChange={setInhDEX}
        label='DEX'
        max={2}
      />
      <InputNumber
        field={inhCON}
        handleChange={setInhCON}
        label='CON'
        max={2}
      />
      <InputNumber
        field={inhINT}
        handleChange={setInhINT}
        label='INT'
        max={2}
      />
      <InputNumber
        field={inhWIS}
        handleChange={setInhWIS}
        label='WIS'
        max={2}
      />
      <InputNumber
        field={inhCHA}
        handleChange={setInhCHA}
        label='CHA'
        max={2}
      />
      <h2>Traits</h2>
      <InputNumber
        field={maxLanguages}
        handleChange={setMaxLanguages}
        label='Max Languages Choices'
        max={2}
      />
      <InputSelect
        field={languages}
        handleChange={setLanguages}
        label='Languages Available'
        multiple={true}
        options={languagesOptions}
      />
      <InputSelect
        field={features}
        handleChange={setFeatures}
        label='Features'
        options={featuresOptions}
      />
      <h3>Racial Traits</h3>
      <InputSelect
        field={size}
        handleChange={setSize}
        label='Size'
        options={SIZES}
      />
      <InputNumber
        field={speed}
        handleChange={setSpeed}
        label='Speed'
      />
      <InputSelect
        field={damageImmunities}
        handleChange={setDamageImmunities}
        label='Damage Immunities'
        multiple={true}
        options={damageTypesOptions}
      />
      <InputSelect
        field={damageResistances}
        handleChange={setDamageResistances}
        label='Damage Resistances'
        multiple={true}
        options={damageTypesOptions}
      />
      <InputSelect
        field={damageImmunities}
        handleChange={setDamageVulnerabilities}
        label='Damage Vulnerabilities'
        multiple={true}
        options={damageTypesOptions}
      />
      <InputSelect
        field={conditionImmunities}
        handleChange={setConditionImmunities}
        label='Conditions Immunities'
        multiple={true}
        options={conditionsOptions}
      />
    </Form>
  );
};

export const FlawPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [background, setBackground] = useState([1]);
  const [backgroundList, setBackgroundList] = useState([]);

  useEffect(() => {
    getAllQuery(setBackgroundList, 'traits', 'background');
  }, []);

  let backgroundOptions = [];
  backgroundList.forEach(object => backgroundOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/traits/flaw/', {
        background: background,
        name: name,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setBackground([1]);
        setBackgroundList([]);
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
      header='Create Flaw'
    >
      <InputTextArea
        field={name}
        handleChange={setName}
        label='Description'
      />
      <InputSelect
        field={background}
        handleChange={setBackground}
        label='Background'
        multiple={true}
        options={backgroundOptions}
      />
    </Form>
  );
};

export const IdealPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [background, setBackground] = useState([1]);
  const [backgroundList, setBackgroundList] = useState([]);

  useEffect(() => {
    getAllQuery(setBackgroundList, 'traits', 'background');
  }, []);

  let backgroundOptions = [];
  backgroundList.forEach(object => backgroundOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/traits/ideal/', {
        background: background,
        name: name,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setBackground([1]);
        setBackgroundList([]);
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
      header='Create Ideal'
    >
      <InputTextArea
        field={name}
        handleChange={setName}
        label='Description'
      />
      <InputSelect
        field={background}
        handleChange={setBackground}
        label='Background'
        multiple={true}
        options={backgroundOptions}
      />
    </Form>
  );
};

export const PersonalityPostForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [name, setName] = useState('');
  const [background, setBackground] = useState([1]);
  const [backgroundList, setBackgroundList] = useState([]);

  useEffect(() => {
    getAllQuery(setBackgroundList, 'traits', 'background');
  }, []);

  let backgroundOptions = [];
  backgroundList.forEach(object => backgroundOptions.push({ value: object.id, label: object.name }));

  const handleSubmit = event => {
    event.preventDefault();
    axiosInstance
      .post('/traits/personality/', {
        background: background,
        name: name,
      })
      .then(response => {
        console.log(response.data);
        setErrorMessage('');
        setName('');
        setBackground([1]);
        setBackgroundList([]);
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
      header='Create Personality'
    >
      <InputTextArea
        field={name}
        handleChange={setName}
        label='Description'
      />
      <InputSelect
        field={background}
        handleChange={setBackground}
        label='Background'
        multiple={true}
        options={backgroundOptions}
      />
    </Form>
  );
};
