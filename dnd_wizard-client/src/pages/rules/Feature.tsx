import React, { useState } from "react";
import { axiosPOST } from "@api/core";
import { featureURL } from "@api/rules";
import Form from "@components/forms/Form";
import { FeatureProps } from "@core/interfaces/rules";
import { Description, DESCRIPTION } from "@layouts/Description";
import { ImmResVul, IMM_RES_VUL } from "@layouts/ImmResVul";
import { ProficiencyTrait, PROFICIENCY_TRAIT } from "@layouts/ProficiencyTrait";

export const FeatureGET: React.FC = () => {
  return (
    <>
      <h1>FeatureGET</h1>
    </>
  );
};

export const FeatureLIST: React.FC = () => {
  return (
    <>
      <h1>FeatureLIST</h1>
    </>
  );
};

export const FeaturePOST: React.FC = () => {
  const DATA = { ...DESCRIPTION, ...PROFICIENCY_TRAIT, ...IMM_RES_VUL };
  const [form, setForm] = useState<FeatureProps>(DATA);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(featureURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Feature"} onSubmit={handleSubmit}>
      <Description value={form} setValue={setForm} />
      <ImmResVul value={form} setValue={setForm} />
      <ProficiencyTrait value={form} setValue={setForm} />
    </Form>
  );
};

export const FeaturePUT: React.FC = () => {
  return (
    <>
      <h1>FeaturePUT</h1>
    </>
  );
};
