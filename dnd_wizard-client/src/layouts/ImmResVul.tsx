import React, { useEffect, useState } from "react";
import { axiosGET } from "@api/core";
import { conditionURL, damageTypeURL } from "@api/rules";
import Select from "@components/forms/Select";
import { ImmResVulProps } from "@core/interfaces/core";
import { ConditionProps, DamageTypeProps } from "@core/interfaces/rules";
import { getOptions } from "@utils/forms";

export const IMM_RES_VUL: ImmResVulProps = {
  condition_immunity: [],
  damage_immunity: [],
  damage_resistance: [],
  damage_vulnerability: [],
};

interface Props {
  value: ImmResVulProps;
  setValue: (value: ImmResVulProps) => void;
}

export const ImmResVul: React.FC<Props> = ({ value, setValue }) => {
  const [conditions, setConditions] = useState<ConditionProps[]>([]);
  const [damageTypes, setDamageTypes] = useState<DamageTypeProps[]>([]);

  useEffect(() => {
    axiosGET(conditionURL, setConditions);
    axiosGET(damageTypeURL, setDamageTypes);
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
