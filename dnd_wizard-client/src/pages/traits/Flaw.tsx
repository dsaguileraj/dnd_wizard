import { axiosPOST } from "@api/core";
import { flawURL } from "@api/traits";
import Form from "@components/forms/Form";
import { FlawProps } from "@core/interfaces/traits";
import { PERSONAL_TRAIT, PersonalTrait } from "@layouts/PersonalTrait";
import React, { useState } from "react";

export const FlawGET: React.FC = () => {
  return (
    <>
      <h1>FlawGET</h1>
    </>
  );
};

export const FlawLIST: React.FC = () => {
  return (
    <>
      <h1>FlawLIST</h1>
    </>
  );
};

export const FlawPOST: React.FC = () => {
  const DATA: FlawProps = { ...PERSONAL_TRAIT };
  const [form, setForm] = useState<FlawProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(flawURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Flaw"} onSubmit={handleSubmit}>
      <PersonalTrait value={form} setValue={setForm} />
    </Form>
  );
};

export const FlawPUT: React.FC = () => {
  return (
    <>
      <h1>FlawPUT</h1>
    </>
  );
};
