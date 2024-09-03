import React, { useEffect, useState } from "react";
import { axiosGET } from "@api/core";
import { conditionInstance, damageTypeInstance } from "@api/rules";
import Select from "@components/forms/Select";
import { ImmResVul } from "@core/interfaces/core";
import { Condition, DamageType } from "@core/interfaces/rules";
import { getOptions } from "@utils/forms";

export const ImmResVul_FIELDS: ImmResVul = {
  condition_immunity: [],
  damage_immunity: [],
  damage_resistance: [],
  damage_vulnerability: [],
};

interface Props {
  value: ImmResVul;
  setValue: (value: ImmResVul) => void;
}

export const ImmResVulFields: React.FC<Props> = ({ value, setValue }) => {
  const [conditions, setConditions] = useState<Condition[]>([]);
  const [damageTypes, setDamageTypes] = useState<DamageType[]>([]);

  useEffect(() => {
    axiosGET(conditionInstance, setConditions);
    axiosGET(damageTypeInstance, setDamageTypes);
  }, []);

  return (
    <>
      <Select
        label={"Condition Immunities"}
        value={value.condition_immunity}
        setValue={setValue}
        options={getOptions(conditions)}
        multiple={true}
      />
      <Select
        label={"Damage Immunities"}
        value={value.damage_immunity}
        setValue={setValue}
        options={getOptions(damageTypes)}
        multiple={true}
      />
      <Select
        label={"Damage Resistances"}
        value={value.damage_resistance}
        setValue={setValue}
        options={getOptions(damageTypes)}
        multiple={true}
      />
      <Select
        label={"Damage Vulnerabilities"}
        value={value.damage_vulnerability}
        setValue={setValue}
        options={getOptions(damageTypes)}
        multiple={true}
      />
    </>
  );
};
