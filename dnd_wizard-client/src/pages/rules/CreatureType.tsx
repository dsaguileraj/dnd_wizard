import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { creatureTypeURL } from "@api/rules";
import Form from "@components/forms/Form";
import { CreatureTypeProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";

export const CreatureTypeGET: React.FC = () => {
  return (
    <>
      <h1>CreatureTypeGET</h1>
    </>
  );
};

export const CreatureTypeLIST: React.FC = () => {
  return (
    <>
      <h1>CreatureTypeLIST</h1>
    </>
  );
};

export const CreatureTypePOST: React.FC = () => {
  const DATA = { ...DESCRIPTION };
  const [form, setForm] = useState<CreatureTypeProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(creatureTypeURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Creature Type"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
    </Form>
  );
};

export const CreatureTypePUT: React.FC = () => {
  return (
    <>
      <h1>CreatureTypePUT</h1>
    </>
  );
};
