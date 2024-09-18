import { axiosGET, axiosPOST } from "@api/core";
import { featureURL } from "@api/rules";
import { classURL, progressURL } from "@api/traits";
import Form from "@components/forms/Form";
import InputNumber from "@components/forms/InputNumber";
import Select from "@components/forms/Select";
import { FeatureProps } from "@core/interfaces/rules";
import { EntityClassProps, ProgressTable } from "@core/interfaces/traits";
import { getOptions } from "@utils/forms";
import React, { useEffect, useState } from "react";

export const ProgressGET: React.FC = () => {
  return (
    <>
      <h1>ProgressGET</h1>
    </>
  );
};

export const ProgressLIST: React.FC = () => {
  return (
    <>
      <h1>ProgressLIST</h1>
    </>
  );
};

export const ProgressPOST: React.FC = () => {
  const DATA: ProgressTable = {
    entity_class: 1,
    features: [],
    known_cantrips: 0,
    known_spells: 0,
    level: 0,
    spell_slot_1: 0,
    spell_slot_2: 0,
    spell_slot_3: 0,
    spell_slot_4: 0,
    spell_slot_5: 0,
    spell_slot_6: 0,
    spell_slot_7: 0,
    spell_slot_8: 0,
    spell_slot_9: 0,
  };
  const [form, setForm] = useState<ProgressTable>(DATA);
  const [classes, setClasses] = useState<EntityClassProps[]>([]);
  const [features, setFeatures] = useState<FeatureProps[]>([]);

  useEffect(() => {
    axiosGET(classURL, setClasses);
    axiosGET(featureURL, setFeatures);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(progressURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Progress Table"} onSubmit={handleSubmit}>
      <Select
        label={"Class"}
        value={form.entity_class}
        setValue={setForm}
        options={getOptions(classes)}
        required={true}
      />
      <InputNumber
        label={"Level"}
        value={form.level}
        setValue={setForm}
        min={1}
        max={20}
        required={true}
      />
      <Select
        label={"Features"}
        value={form.features}
        setValue={setForm}
        options={getOptions(features)}
        multiple={true}
        required={false}
      />
      <h2>Spellcasting</h2>
      <InputNumber
        label={"Level 1"}
        value={form.spell_slot_1}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 2"}
        value={form.spell_slot_2}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 3"}
        value={form.spell_slot_3}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 4"}
        value={form.spell_slot_4}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 5"}
        value={form.spell_slot_5}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 6"}
        value={form.spell_slot_6}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 7"}
        value={form.spell_slot_7}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 8"}
        value={form.spell_slot_8}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Level 9"}
        value={form.spell_slot_9}
        setValue={setForm}
        min={0}
        required={true}
      />
    </Form>
  );
};

export const ProgressPUT: React.FC = () => {
  return (
    <>
      <h1>ProgressPUT</h1>
    </>
  );
};
