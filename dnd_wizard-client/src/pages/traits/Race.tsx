import { spellURL } from "@api/actions";
import { axiosGET, axiosPOST } from "@api/core";
import {
  conditionURL,
  creatureTypeURL,
  damageTypeURL,
  featureURL,
} from "@api/rules";
import { raceURL } from "@api/traits";
import Form from "@components/forms/Form";
import InputCheck from "@components/forms/InputCheck";
import InputNumber from "@components/forms/InputNumber";
import InputText from "@components/forms/InputText";
import Select from "@components/forms/Select";
import { ALIGMENTS, SIZES, STATS } from "@core/choices";
import { SpellProps } from "@core/interfaces/actions";
import {
  ConditionProps,
  CreatureTypeProps,
  DamageTypeProps,
  FeatureProps,
} from "@core/interfaces/rules";
import { RaceProps } from "@core/interfaces/traits";
import { IMM_RES_VUL, ImmResVul } from "@layouts/ImmResVul";
import { PROFICIENCY_TRAIT, ProficiencyTrait } from "@layouts/ProficiencyTrait";
import { getOptions } from "@utils/forms";
import React, { useEffect, useState } from "react";

export const RaceGET: React.FC = () => {
  return (
    <>
      <h1>RaceGET</h1>
    </>
  );
};

export const RaceLIST: React.FC = () => {
  const DATA: RaceProps = {
    ...PROFICIENCY_TRAIT,
    ...IMM_RES_VUL,
    aligment: undefined,
    burrow: 0,
    cha_increase: 0,
    climb: 0,
    con_increase: 0,
    creature_type: [],
    dex_increase: 0,
    features: [],
    fly: 0,
    has_nature_armor: false,
    innate_spellcaster: false,
    int_increase: 0,
    is_playable: false,
    known_spells: 0,
    name: "",
    nature_armor: 0,
    size: SIZES[0].value,
    spells_available: [],
    str_increase: 0,
    swim: 0,
    walk: 0,
    wis_increase: 0,
    ability: STATS[0].value,
  };
  const [form, setForm] = useState<RaceProps>(DATA);
  const [creatureTypes, setCreatureTypes] = useState<CreatureTypeProps[]>([]);
  const [features, setFeatures] = useState<FeatureProps[]>([]);
  const [spells, setSpells] = useState<SpellProps[]>([]);

  useEffect(() => {
    axiosGET(creatureTypeURL, setCreatureTypes);
    axiosGET(featureURL, setFeatures);
    axiosGET(spellURL, setSpells);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(raceURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Race"} onSubmit={handleSubmit}>
      <InputText
        label={"Name"}
        value={form.name}
        setValue={setForm}
        required={true}
      />
      <ProficiencyTrait value={form} setValue={setForm} />
      <Select
        label={"Creature type"}
        value={form.creature_type}
        setValue={setForm}
        options={getOptions(creatureTypes)}
        multiple={true}
        required={false}
      />
      <Select
        label={"Creature type"}
        value={form.aligment}
        setValue={setForm}
        options={ALIGMENTS}
      />
      <InputCheck
        label={"Is playable"}
        value={form.is_playable}
        setValue={setForm}
      />
      <h2>Ability score increase</h2>
      <InputNumber
        label={"STR"}
        value={form.str_increase}
        setValue={setForm}
        min={-5}
        max={5}
        required={true}
      />
      <InputNumber
        label={"DEX"}
        value={form.dex_increase}
        setValue={setForm}
        min={-5}
        max={5}
        required={true}
      />
      <InputNumber
        label={"CON"}
        value={form.con_increase}
        setValue={setForm}
        min={-5}
        max={5}
        required={true}
      />
      <InputNumber
        label={"INT"}
        value={form.int_increase}
        setValue={setForm}
        min={-5}
        max={5}
        required={true}
      />
      <InputNumber
        label={"WIS"}
        value={form.wis_increase}
        setValue={setForm}
        min={-5}
        max={5}
        required={true}
      />
      <InputNumber
        label={"CHA"}
        value={form.cha_increase}
        setValue={setForm}
        min={-5}
        max={5}
        required={true}
      />
      <h2>Racial traits</h2>
      <Select
        label={"Size"}
        value={form.size}
        setValue={setForm}
        options={SIZES}
        required={true}
      />
      <Select
        label={"Features"}
        value={form.features}
        setValue={setForm}
        options={getOptions(features)}
        required={true}
      />
      <ImmResVul value={form} setValue={setForm} />
      <h2>Armor class</h2>
      <InputCheck
        label={"Has natural armor?"}
        value={form.has_nature_armor}
        setValue={setForm}
      />
      <InputNumber
        label={"Nature armor"}
        value={form.nature_armor}
        setValue={setForm}
        min={form.nature_armor ? 1 : 0}
        required={form.has_nature_armor}
        disabled={!form.has_nature_armor}
      />
      <h2>Speed</h2>
      <InputNumber
        label={"Burrow"}
        value={form.burrow}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Climb"}
        value={form.climb}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Fly"}
        value={form.fly}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Swim"}
        value={form.swim}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Walk"}
        value={form.walk}
        setValue={setForm}
        min={0}
        required={true}
      />
      <h2>Spellcasting</h2>
      <InputCheck
        label={"Innate spellcaster?"}
        value={form.innate_spellcaster}
        setValue={setForm}
      />
      <Select
        label={"Ability"}
        value={form.ability}
        setValue={setForm}
        options={STATS}
        required={form.innate_spellcaster}
        disabled={!form.innate_spellcaster}
      />
      <InputNumber
        label={"Known spells"}
        value={form.known_spells}
        setValue={setForm}
        min={form.innate_spellcaster ? 1 : 0}
        required={form.innate_spellcaster}
        disabled={!form.innate_spellcaster}
      />
      <Select
        label={"Spells available"}
        value={form.spells_available}
        setValue={setForm}
        options={getOptions(spells)}
        multiple={form.known_spells > 1 ? true : false}
        required={form.innate_spellcaster}
        disabled={!form.innate_spellcaster}
      />
    </Form>
  );
};

export const RacePOST: React.FC = () => {
  return (
    <>
      <h1>RacePOST</h1>
    </>
  );
};

export const RacePUT: React.FC = () => {
  return (
    <>
      <h1>RacePUT</h1>
    </>
  );
};
