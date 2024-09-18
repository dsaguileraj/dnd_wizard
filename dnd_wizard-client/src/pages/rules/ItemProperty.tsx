import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { propertyURL } from "@api/rules";
import Form from "@components/forms/Form";
import Select from "@components/forms/Select";
import { ITEM_TYPES } from "@core/choices";
import { ItemPropertyProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";

export const ItemPropertyGET: React.FC = () => {
  return (
    <>
      <h1>ItemPropertyGET</h1>
    </>
  );
};

export const ItemPropertyLIST: React.FC = () => {
  return (
    <>
      <h1>ItemPropertyLIST</h1>
    </>
  );
};

export const ItemPropertyPOST: React.FC = () => {
  const DATA = { ...DESCRIPTION, item_type: ITEM_TYPES[0].value };
  const [form, setForm] = useState<ItemPropertyProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(propertyURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Item Property"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
      <Select
        label={"Item type"}
        value={form.item_type}
        setValue={setForm}
        options={ITEM_TYPES}
      />
    </Form>
  );
};

export const ItemPropertyPUT: React.FC = () => {
  return (
    <>
      <h1>ItemPropertyPUT</h1>
    </>
  );
};
