import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { languageURL } from "@api/rules";
import Form from "@components/forms/Form";
import { LanguageProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";

export const LanguageGET: React.FC = () => {
  return (
    <>
      <h1>LanguageGET</h1>
    </>
  );
};

export const LanguageLIST: React.FC = () => {
  return (
    <>
      <h1>LanguageLIST</h1>
    </>
  );
};

export const LanguagePOST: React.FC = () => {
  const DATA = { ...DESCRIPTION };
  const [form, setForm] = useState<LanguageProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(languageURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Language"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
    </Form>
  );
};

export const LanguagePUT: React.FC = () => {
  return (
    <>
      <h1>LanguagePUT</h1>
    </>
  );
};
