import React, { useEffect, useState } from "react";
import { axiosGET } from "@api/api";
import InputNumber from "@components/forms/InputNumber";
import InputText from "@components/forms/InputText";
import Select from "@components/forms/Select";
import { Weapon } from "@core/interfaces/actions";
import { Entity } from "@core/interfaces/core";
import { Race } from "@core/interfaces/traits";
import { getOptions } from "@utils/forms";

export const ENTITY_FIELDS: Entity = {
  name: "",
  race: undefined,
  hit_points: 1,
  str_score: 0,
  dex_score: 0,
  con_score: 0,
  int_score: 0,
  wis_score: 0,
  cha_score: 0,
  weapons: [],
};

interface Props {
  value: Entity;
  setValue: (value: Entity) => void;
}

export const EntityFields: React.FC<Props> = ({ value, setValue }) => {
  const [races, setRaces] = useState<Race[]>([]);
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    axiosGET("traits/race/", setRaces);
    axiosGET("actions/weapon/", setWeapons);
  }, []);

  return (
    <>
      <InputText
        label={"Name"}
        value={value.name}
        setValue={setValue}
        maxLength={50}
        required={true}
      />
      <Select
        label={"Race"}
        value={value?.race}
        setValue={setValue}
        options={getOptions(races)}
      />
      <InputNumber
        label={"Hit Points"}
        value={value.hit_points}
        setValue={setValue}
        min={0}
      />
      <InputNumber
        label={"STR"}
        value={value.str_score}
        setValue={setValue}
        min={0}
        max={30}
      />
      <InputNumber
        label={"DEX"}
        value={value.dex_score}
        setValue={setValue}
        min={0}
        max={30}
      />
      <InputNumber
        label={"CON"}
        value={value.con_score}
        setValue={setValue}
        min={0}
        max={30}
      />
      <InputNumber
        label={"INT"}
        value={value.int_score}
        setValue={setValue}
        min={0}
        max={30}
      />
      <InputNumber
        label={"WIS"}
        value={value.wis_score}
        setValue={setValue}
        min={0}
        max={30}
      />
      <InputNumber
        label={"CHA"}
        value={value.cha_score}
        setValue={setValue}
        min={0}
        max={30}
      />
      <Select
        label={"Weapons"}
        value={value.weapons}
        setValue={setValue}
        options={getOptions(weapons)}
        multiple={true}
      />
    </>
  );
};
