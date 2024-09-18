import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { categoryURL } from "@api/rules";
import Form from "@components/forms/Form";
import Select from "@components/forms/Select";
import { ITEM_TYPES } from "@core/choices";
import { CategoryProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";

export const CategoryGET: React.FC = () => {
  return (
    <>
      <h1>CategoryGET</h1>
    </>
  );
};

export const CategoryLIST: React.FC = () => {
  return (
    <>
      <h1>CategoryLIST</h1>
    </>
  );
};

export const CategoryPOST: React.FC = () => {
  const DATA = { ...DESCRIPTION, item_type: ITEM_TYPES[0].value };
  const [form, setForm] = useState<CategoryProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(categoryURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Category"} onSubmit={handleSubmit}>
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

export const CategoryPUT: React.FC = () => {
  return (
    <>
      <h1>CategoryPUT</h1>
    </>
  );
};
