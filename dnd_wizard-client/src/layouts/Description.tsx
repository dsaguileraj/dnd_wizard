import React from "react";
import { DescriptionProps } from "@core/interfaces/core";
import InputText from "@components/forms/InputText";
import TextArea from "@components/forms/TextArea";

export const DESCRIPTION: DescriptionProps = {
  name: "",
  description: "",
};

interface Props {
  value: DescriptionProps;
  setValue: (value: DescriptionProps) => void;
}

export const Description: React.FC<Props> = ({ value, setValue }) => {
  return (
    <>
      <InputText
        label={"Name"}
        value={value.name}
        setValue={setValue}
        required={true}
      />
      <TextArea
        label={"Description"}
        value={value.description}
        setValue={setValue}
        required={true}
      />
    </>
  );
};
