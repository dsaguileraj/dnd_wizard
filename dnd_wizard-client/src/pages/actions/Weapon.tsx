import React, { useEffect, useState } from "react";
import { weaponURL } from "@api/actions";
import { axiosGET, axiosPOST } from "@api/core";
import Form from "@components/forms/Form";
import TextArea from "@components/forms/TextArea";
import { WeaponProps } from "@core/interfaces/actions";
import { Item, ITEM } from "@layouts/Item";
import { DICES } from "@core/choices";
import InputNumber from "@components/forms/InputNumber";
import Select from "@components/forms/Select";
import { DamageTypeProps, ItemPropertyProps } from "@core/interfaces/rules";
import { damageTypeURL } from "@api/rules";
import { getOptions } from "@utils/forms";
import { progressURL } from "@api/traits";
import InputCheck from "@components/forms/InputCheck";

export const WeaponGET: React.FC = () => {
  return (
    <>
      <h1>WeaponGET</h1>
    </>
  );
};

export const WeaponLIST: React.FC = () => {
  return (
    <>
      <h1>WeaponLIST</h1>
    </>
  );
};

export const WeaponPOST: React.FC = () => {
  const DATA: WeaponProps = {
    ...ITEM,
    bonus: 0,
    dices: 0,
    melee_weapon: false,
    property: [],
    ranged_weapon: false,
    damage_type: undefined,
    hit_dice: DICES[0].value,
    max_range: undefined,
    min_range: undefined,
  };
  const [form, setForm] = useState<WeaponProps>(DATA);
  const [damageTypes, setDamageTypes] = useState<DamageTypeProps[]>([]);
  const [properties, setProperties] = useState<ItemPropertyProps[]>([]);

  useEffect(() => {
    axiosGET(damageTypeURL, setDamageTypes);
    axiosGET(progressURL, setProperties);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(weaponURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Weapon"} onSubmit={handleSubmit}>
      <Item value={form} setValue={setForm} />
      <InputNumber
        label={"Dices"}
        value={form.dices}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Hit dice"}
        value={form.hit_dice}
        setValue={setForm}
        min={0}
        required={false}
      />
      <InputNumber
        label={"Bonus"}
        value={form.bonus}
        setValue={setForm}
        min={0}
        required={true}
      />
      <Select
        label={"Damage type"}
        value={form.damage_type}
        setValue={setForm}
        options={getOptions(damageTypes)}
        required={false}
      />
      <Select
        label={"Properties"}
        value={form.property}
        setValue={setForm}
        options={getOptions(properties)}
        required={false}
      />
      <InputCheck
        label={"Melee weapon?"}
        value={form.melee_weapon}
        setValue={setForm}
      />
      <InputCheck
        label={"Range weapon?"}
        value={form.ranged_weapon}
        setValue={setForm}
      />
      {form.ranged_weapon && (
        <InputNumber
          label={"Min range"}
          value={form.min_range}
          setValue={setForm}
          min={2}
          required={form.ranged_weapon}
          disabled={!form.ranged_weapon}
        />
      )}
      {form.ranged_weapon && (
        <InputNumber
          label={"Max range"}
          value={form.max_range}
          setValue={setForm}
          min={3}
          required={form.ranged_weapon}
          disabled={!form.ranged_weapon}
        />
      )}
    </Form>
  );
};

export const WeaponPUT: React.FC = () => {
  return (
    <>
      <h1>WeaponPUT</h1>
    </>
  );
};
