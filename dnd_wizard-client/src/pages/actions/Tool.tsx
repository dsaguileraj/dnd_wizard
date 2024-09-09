import React, { useState } from "react";
import { toolURL } from "@api/actions";
import { axiosPOST } from "@api/core";
import Form from "@components/forms/Form";
import TextArea from "@components/forms/TextArea";
import { ToolProps } from "@core/interfaces/actions";
import { Item, ITEM } from "@layouts/Item"

export const ToolGET: React.FC = () => {
  return (
    <>
      <h1>ToolGET</h1>
    </>
  );
};

export const ToolLIST: React.FC = () => {
  return (
    <>
      <h1>ToolLIST</h1>
    </>
  );
};

export const ToolPOST: React.FC = () => {
  const DATA: ToolProps = { ...ITEM, description: "" };
  const [form, setForm] = useState<ToolProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(toolURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Tool"} onSubmit={handleSubmit}>
      <Item value={form} setValue={setForm} />
      <TextArea
        label={"Description"}
        value={form.description}
        setValue={setForm}
      />
    </Form>
  );
};

export const ToolPUT: React.FC = () => {
  return (
    <>
      <h1>ToolPUT</h1>
    </>
  );
};
