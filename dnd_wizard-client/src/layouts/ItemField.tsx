import React, { useEffect, useState } from "react";
import { axiosGET } from "@api/core";
import { categoryInstance } from "@api/rules";
import InputNumber from "@components/forms/InputNumber";
import InputText from "@components/forms/InputText";
import Select from "@components/forms/Select";
import { COINS } from "@core/choices";
import { Item } from "@core/interfaces/core";
import { Category } from "@core/interfaces/rules";
import { getOptions } from "@utils/forms";

export const ITEM_FIELDS: Item = {
  name: "",
  category: undefined,
  cost: 0,
  coin: undefined,
  weight: 0,
};

interface Props {
  value: Item;
  setValue: (value: Item) => void;
}

export const ItemFields: React.FC<Props> = ({ value, setValue }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => axiosGET(categoryInstance, setCategories), []);

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
        label={"Category"}
        value={value?.category}
        setValue={setValue}
        options={getOptions(categories)}
      />
      <InputNumber
        label={"Cost"}
        value={value.cost}
        setValue={setValue}
        min={0}
      />
      <Select
        label={"Coin"}
        value={value.coin}
        setValue={setValue}
        options={COINS}
        disabled={value.cost ? false : true}
      />
      <InputNumber
        label={"Weight"}
        value={value.weight}
        setValue={setValue}
        min={0}
      />
    </>
  );
};
