import React, { useEffect, useState } from "react";
import { spellURL } from "@api/actions";
import { axiosGET, axiosPOST } from "@api/core";
import { magicSchoolURL, propertyURL } from "@api/rules";
import Form from "@components/forms/Form";
import InputCheck from "@components/forms/InputCheck";
import InputNumber from "@components/forms/InputNumber";
import Select from "@components/forms/Select";
import TextArea from "@components/forms/TextArea";
import { MEASURE_TIME } from "@core/choices";
import { SpellProps } from "@core/interfaces/actions";
import { DamageTypeProps, MagicSchoolProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";
import { getOptions } from "@utils/forms";

export const SpellGET: React.FC = () => {
  return (
    <>
      <h1>SpellGET</h1>
    </>
  );
};

export const SpellLIST: React.FC = () => {
  return (
    <>
      <h1>SpellLIST</h1>
    </>
  );
};

export const SpellPOST: React.FC = () => {
  const DATA: SpellProps = {
    ...DESCRIPTION,
    casting_measure: MEASURE_TIME[0].value,
    casting_time: 0,
    duration: 0,
    duration_measure: MEASURE_TIME[0].value,
    is_ritual: false,
    level: 0,
    material: false,
    need_concentration: false,
    somatic: false,
    spell_range: 0,
    verbal: false,
    damage_type: undefined,
    magic_school: undefined,
    materials: "",
  };
  const [form, setForm] = useState<SpellProps>(DATA);
  const [damageTypes, setDamageTypes] = useState<DamageTypeProps[]>([]);
  const [magicSchools, setMagicSchools] = useState<MagicSchoolProps[]>([]);

  useEffect(() => {
    axiosGET(propertyURL, setDamageTypes);
    axiosGET(magicSchoolURL, setMagicSchools);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(spellURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Spell"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
      <Select
        label={"Magic school"}
        value={form.magic_school}
        setValue={setForm}
        options={getOptions(magicSchools)}
        required={true}
      />
      <Select
        label={"Damage type"}
        value={form.damage_type}
        setValue={setForm}
        options={getOptions(damageTypes)}
      />
      <InputNumber
        label={"Level"}
        value={form.level}
        setValue={setForm}
        min={0}
        max={9}
      />
      <InputNumber
        label={"Spell range"}
        value={form.spell_range}
        setValue={setForm}
        min={-1}
      />
      <h2>Components</h2>
      <InputCheck label={"Verbal"} value={form.verbal} setValue={setForm} />
      <InputCheck label={"Somatic"} value={form.somatic} setValue={setForm} />
      <InputCheck label={"Material"} value={form.material} setValue={setForm} />
      {form.material && (
        <TextArea
          label={"Materials"}
          value={form.materials}
          setValue={setForm}
          required={true}
        />
      )}
      <h2>Casting</h2>
      <InputCheck
        label={"Is a ritual?"}
        value={form.is_ritual}
        setValue={setForm}
      />
      <InputNumber
        label={"Time"}
        value={form.casting_time}
        setValue={setForm}
        min={-1}
      />
      <Select
        label={"Measure"}
        value={form.casting_measure}
        setValue={setForm}
        options={MEASURE_TIME}
        required={form.casting_time <= 0 ? true : false}
      />
      <h2>Duration</h2>
      <InputCheck
        label={"Need concentration?"}
        value={form.need_concentration}
        setValue={setForm}
      />
      <InputNumber
        label={"Time"}
        value={form.duration}
        setValue={setForm}
        min={-1}
      />
      <Select
        label={"Measure"}
        value={form.duration_measure}
        setValue={setForm}
        options={MEASURE_TIME}
        required={form.duration ? true : false}
      />
    </Form>
  );
};

export const SpellPUT: React.FC = () => {
  return (
    <>
      <h1>SpellPUT</h1>
    </>
  );
};
