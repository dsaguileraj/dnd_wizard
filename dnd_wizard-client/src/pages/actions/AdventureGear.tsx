import React, { useState } from "react";
import { equipmentURL } from "@api/actions";
import { axiosPOST } from "@api/core";
import Form from "@components/forms/Form";
import TextArea from "@components/forms/TextArea";
import { AdventureGearProps } from "@core/interfaces/actions";
import { Item, ITEM } from "@layouts/Item";

export const AdventureGearGET: React.FC = () => {
  return (
    <>
      <h1>AdventureGearGET</h1>
    </>
  );
};

export const AdventureGearLIST: React.FC = () => {
  return (
    <>
      <h1>AdventureGearLIST</h1>
    </>
  );
};

export const AdventureGearPOST: React.FC = () => {
  const DATA: AdventureGearProps = { ...ITEM, description: "" };
  const [form, setForm] = useState<AdventureGearProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(equipmentURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Adventure Gear"} onSubmit={handleSubmit}>
      <Item value={form} setValue={setForm} />
      <TextArea
        label={"Description"}
        value={form.description}
        setValue={setForm}
      />
    </Form>
  );
};

export const AdventureGearPUT: React.FC = () => {
  return (
    <>
      <h1>AdventureGearPUT</h1>
    </>
  );
};
