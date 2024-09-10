import { axiosPOST } from "@api/core";
import { idealURL } from "@api/traits";
import Form from "@components/forms/Form";
import { IdealProps } from "@core/interfaces/traits";
import { PERSONAL_TRAIT, PersonalTrait } from "@layouts/PersonalTrait";
import React, { useState } from "react";

export const IdealGET: React.FC = () => {
  return (
    <>
      <h1>IdealGET</h1>
    </>
  );
};

export const IdealLIST: React.FC = () => {
  return (
    <>
      <h1>IdealLIST</h1>
    </>
  );
};

export const IdealPOST: React.FC = () => {
  const DATA: IdealProps = { ...PERSONAL_TRAIT };
  const [form, setForm] = useState<IdealProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(idealURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Ideal"} onSubmit={handleSubmit}>
      <PersonalTrait value={form} setValue={setForm} />
    </Form>
  );
};

export const IdealPUT: React.FC = () => {
  return (
    <>
      <h1>IdealPUT</h1>
    </>
  );
};
