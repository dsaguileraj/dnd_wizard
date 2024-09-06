import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { magicSchoolURL } from "@api/rules";
import Form from "@components/forms/Form";
import { MagicSchoolProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";

export const MagicSchoolGET: React.FC = () => {
  return (
    <>
      <h1>MagicSchoolGET</h1>
    </>
  );
};

export const MagicSchoolLIST: React.FC = () => {
  return (
    <>
      <h1>MagicSchoolLIST</h1>
    </>
  );
};

export const MagicSchoolPOST: React.FC = () => {
  const DATA = { ...DESCRIPTION };
  const [form, setForm] = useState<MagicSchoolProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(magicSchoolURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Magic School"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
    </Form>
  );
};

export const MagicSchoolPUT: React.FC = () => {
  return (
    <>
      <h1>MagicSchoolPUT</h1>
    </>
  );
};
