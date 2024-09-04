import React, { useEffect, useState } from "react";
import { axiosGET } from "@api/core";
import { conditionInstance } from "@api/rules";
import Select from "@components/forms/Select";
import TextArea from "@components/forms/TextArea";
import { PersonalTraitProps } from "@core/interfaces/core";
import { BackgroundProps } from "@core/interfaces/traits";
import { getOptions } from "@utils/forms";

export const PERSONAL_TRAIT: PersonalTraitProps = {
  background: 1,
  description: "",
};

interface Props {
  value: PersonalTraitProps;
  setValue: (value: PersonalTraitProps) => void;
}

export const PersonalTrait: React.FC<Props> = ({ value, setValue }) => {
  const [backgrounds, setBackgrounds] = useState<BackgroundProps[]>([]);

  useEffect(() => {
    axiosGET(conditionInstance, setBackgrounds);
  }, []);

  return (
    <>
      <Select
        label={"Background"}
        value={value}
        setValue={setValue}
        options={getOptions(backgrounds)}
        required={true}
      />
      <TextArea
        label={"Background"}
        value={value}
        setValue={setValue}
        required={true}
      />
    </>
  );
};
