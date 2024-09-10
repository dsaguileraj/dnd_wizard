import { axiosGET, axiosPOST } from "@api/core";
import { featureURL } from "@api/rules";
import { backgroundURL } from "@api/traits";
import Form from "@components/forms/Form";
import InputText from "@components/forms/InputText";
import Select from "@components/forms/Select";
import { FeatureProps } from "@core/interfaces/rules";
import { BackgroundProps } from "@core/interfaces/traits";
import { PROFICIENCY_TRAIT, ProficiencyTrait } from "@layouts/ProficiencyTrait";
import { getOptions } from "@utils/forms";
import React, { useEffect, useState } from "react";

export const BackgroundGET: React.FC = () => {
  return (
    <>
      <h1>BackgroundGET</h1>
    </>
  );
};

export const BackgroundLIST: React.FC = () => {
  return (
    <>
      <h1>BackgroundLIST</h1>
    </>
  );
};

export const BackgroundPOST: React.FC = () => {
  const DATA: BackgroundProps = {
    ...PROFICIENCY_TRAIT,
    name: "",
    features: [],
  };
  const [form, setForm] = useState<BackgroundProps>(DATA);
  const [features, setFeatures] = useState<FeatureProps[]>([]);

  useEffect(() => axiosGET(featureURL, setFeatures), []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(backgroundURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Background"} onSubmit={handleSubmit}>
      <InputText
        label={"Name"}
        value={form.name}
        setValue={setForm}
        required={true}
      />
      <ProficiencyTrait value={form} setValue={setForm} />
      <Select
        label={"Feautres"}
        value={form.features}
        setValue={setForm}
        options={getOptions(features)}
        required={true}
        multiple={true}
      />
    </Form>
  );
};

export const BackgroundPUT: React.FC = () => {
  return (
    <>
      <h1>BackgroundPUT</h1>
    </>
  );
};
