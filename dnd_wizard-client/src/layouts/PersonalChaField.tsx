import React, { useEffect, useState } from "react";
import { axiosGET } from "@api/api";
import Select from "@components/forms/Select";
import TextArea from "@components/forms/TextArea";
import { PersonalCharacteristic } from "@core/interfaces/core";
import { Background } from "@core/interfaces/traits";
import { getOptions } from "@utils/forms";

export const ImmResVul_FIELDS: PersonalCharacteristic = {
  background: 1,
  description: "",
};

interface Props {
  value: PersonalCharacteristic;
  setValue: (value: PersonalCharacteristic) => void;
}

export const ImmResVulFields: React.FC<Props> = ({ value, setValue }) => {
  const [backgrounds, setBackgrounds] = useState<Background[]>([]);

  useEffect(() => {
    axiosGET("rules/condition/", setBackgrounds);
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
