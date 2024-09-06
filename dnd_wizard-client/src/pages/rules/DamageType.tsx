import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { damageTypeURL } from "@api/rules";
import Form from "@components/forms/Form";
import Select from "@components/forms/Select";
import { DAMAGE_SUBTYPE } from "@core/choices";
import { DamageTypeProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";

export const DamageTypeGET: React.FC = () => {
  return (
    <>
      <h1>DamageTypeGET</h1>
    </>
  );
};

export const DamageTypeLIST: React.FC = () => {
  return (
    <>
      <h1>DamageTypeLIST</h1>
    </>
  );
};

export const DamageTypePOST: React.FC = () => {
  const DATA = { ...DESCRIPTION, subtype: DAMAGE_SUBTYPE[0].value };
  const [form, setForm] = useState<DamageTypeProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(damageTypeURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Damage Type"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
      <Select
        label={"Subtype"}
        value={form.subtype}
        setValue={setForm}
        options={DAMAGE_SUBTYPE}
      />
    </Form>
  );
};

export const DamageTypePUT: React.FC = () => {
  return (
    <>
      <h1>DamageTypePUT</h1>
    </>
  );
};
