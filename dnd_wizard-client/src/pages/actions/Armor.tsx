import React, { useEffect, useState } from "react";
import { armorURL } from "@api/actions";
import { axiosGET, axiosPOST } from "@api/core";
import { propertyURL } from "@api/rules";
import Form from "@components/forms/Form";
import InputCheck from "@components/forms/InputCheck";
import InputNumber from "@components/forms/InputNumber";
import Select from "@components/forms/Select";
import { ArmorProps } from "@core/interfaces/actions";
import { ItemPropertyProps } from "@core/interfaces/rules";
import { Item, ITEM } from "@layouts/Item";
import { getOptions } from "@utils/forms";

export const ArmorGET: React.FC = () => {
  return (
    <>
      <h1>ArmorGET</h1>
    </>
  );
};

export const ArmorLIST: React.FC = () => {
  return (
    <>
      <h1>ArmorLIST</h1>
    </>
  );
};

export const ArmorPOST: React.FC = () => {
  const DATA: ArmorProps = {
    ...ITEM,
    armor_class: 1,
    dex_bonus: 0,
    gives_dex_bonus: false,
    property: [],
    required_str: 0,
  };
  const [form, setForm] = useState<ArmorProps>(DATA);
  const [properties, setProperties] = useState<ItemPropertyProps[]>([]);

  useEffect(() => axiosGET(propertyURL, setProperties), []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm({ ...form, dex_bonus: !form.gives_dex_bonus ? 0 : form.dex_bonus });
    axiosPOST(armorURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Armor"} onSubmit={handleSubmit}>
      <Item value={form} setValue={setForm} />
      <InputNumber
        label={"Armor Class"}
        value={form.armor_class}
        setValue={setForm}
        min={1}
      />
      <InputCheck
        label={"Gives DEX bonus?"}
        value={form.gives_dex_bonus}
        setValue={setForm}
      />
      <InputNumber
        label={"DEX bonus"}
        value={form.dex_bonus}
        setValue={setForm}
        min={0}
        disabled={!form.gives_dex_bonus}
      />
      <InputNumber
        label={"Min STR"}
        value={form.required_str}
        setValue={setForm}
        min={0}
      />
      <Select
        label={"Properties"}
        value={form.property}
        setValue={setForm}
        options={getOptions(properties)}
        required={false}
      />
    </Form>
  );
};

export const ArmorPUT: React.FC = () => {
  return (
    <>
      <h1>ArmorPUT</h1>
    </>
  );
};
