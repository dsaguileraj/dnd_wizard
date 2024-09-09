import React, { useState } from "react";
import { trinketURL } from "@api/actions";
import { axiosPOST } from "@api/core";
import Form from "@components/forms/Form";
import InputText from "@components/forms/InputText";
import { TrinketProps } from "@core/interfaces/actions";

export const TrinketGET: React.FC = () => {
  return (
    <>
      <h1>TrinketGET</h1>
    </>
  );
};

export const TrinketLIST: React.FC = () => {
  return (
    <>
      <h1>TrinketLIST</h1>
    </>
  );
};

export const TrinketPOST: React.FC = () => {
  const DATA = { name: "" };
  const [form, setForm] = useState<TrinketProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(trinketURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Trinket"} onSubmit={handleSubmit}>
      <InputText
        label={"Description"}
        value={form.name}
        setValue={setForm}
        required={true}
      />
    </Form>
  );
};

export const TrinketPUT: React.FC = () => {
  return (
    <>
      <h1>TrinketPUT</h1>
    </>
  );
};
