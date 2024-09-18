import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { conditionURL } from "@api/rules";
import Form from "@components/forms/Form";
import { ConditionProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";

export const ConditionGET: React.FC = () => {
  return (
    <>
      <h1>ConditionGET</h1>
    </>
  );
};

export const ConditionLIST: React.FC = () => {
  return (
    <>
      <h1>ConditionLIST</h1>
    </>
  );
};

export const ConditionPOST: React.FC = () => {
  const DATA = { ...DESCRIPTION };
  const [form, setForm] = useState<ConditionProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(conditionURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Condition"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
    </Form>
  );
};

export const ConditionPUT: React.FC = () => {
  return (
    <>
      <h1>ConditionPUT</h1>
    </>
  );
};
