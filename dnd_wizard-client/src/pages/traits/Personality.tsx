import { axiosPOST } from "@api/core";
import { personalityURL } from "@api/traits";
import Form from "@components/forms/Form";
import { PersonalityProps } from "@core/interfaces/traits";
import { PERSONAL_TRAIT, PersonalTrait } from "@layouts/PersonalTrait";
import React, { useState } from "react";

export const PersonalityGET: React.FC = () => {
  return (
    <>
      <h1>PersonalityGET</h1>
    </>
  );
};

export const PersonalityLIST: React.FC = () => {
  return (
    <>
      <h1>PersonalityLIST</h1>
    </>
  );
};

export const PersonalityPOST: React.FC = () => {
  const DATA: PersonalityProps = { ...PERSONAL_TRAIT };
  const [form, setForm] = useState<PersonalityProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(personalityURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Personality"} onSubmit={handleSubmit}>
      <PersonalTrait value={form} setValue={setForm} />
    </Form>
  );
};

export const PersonalityPUT: React.FC = () => {
  return (
    <>
      <h1>PersonalityPUT</h1>
    </>
  );
};
