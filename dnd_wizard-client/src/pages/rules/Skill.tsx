import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { skillURL } from "@api/rules";
import Form from "@components/forms/Form";
import InputText from "@components/forms/InputText";
import Select from "@components/forms/Select";
import { STATS } from "@core/choices";
import { SkillProps } from "@core/interfaces/rules";

export const SkillGET: React.FC = () => {
  return (
    <>
      <h1>SkillGET</h1>
    </>
  );
};

export const SkillLIST: React.FC = () => {
  return (
    <>
      <h1>SkillLIST</h1>
    </>
  );
};

export const SkillPOST: React.FC = () => {
  const DATA = { name: "", stat: STATS[0].value };
  const [form, setForm] = useState<SkillProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(skillURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Skill"} onSubmit={handleSubmit}>
      <InputText
        label={"Name"}
        value={form.name}
        setValue={setForm}
        required={true}
      />
      <Select
        label={"Skill"}
        value={form.stat}
        setValue={setForm}
        options={STATS}
      />
    </Form>
  );
};

export const SkillPUT: React.FC = () => {
  return (
    <>
      <h1>SkillPUT</h1>
    </>
  );
};
