import { axiosPOST } from "@api/core";
import { bondURL } from "@api/traits";
import Form from "@components/forms/Form";
import { BondProps } from "@core/interfaces/traits";
import { PERSONAL_TRAIT, PersonalTrait } from "@layouts/PersonalTrait";
import React, { useState } from "react";

export const BondGET: React.FC = () => {
  return (
    <>
      <h1>BondGET</h1>
    </>
  );
};

export const BondLIST: React.FC = () => {
  const DATA: BondProps = { ...PERSONAL_TRAIT };
  const [form, setForm] = useState<BondProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(bondURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Bond"} onSubmit={handleSubmit}>
      <PersonalTrait value={form} setValue={setForm} />
    </Form>
  );
};

export const BondPOST: React.FC = () => {
  return (
    <>
      <h1>BondPOST</h1>
    </>
  );
};

export const BondPUT: React.FC = () => {
  return (
    <>
      <h1>BondPUT</h1>
    </>
  );
};
