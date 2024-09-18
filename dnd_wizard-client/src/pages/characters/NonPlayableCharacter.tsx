import { armorURL, spellURL } from "@api/actions";
import { nonPlayableURL } from "@api/characters";
import { axiosGET, axiosPOST } from "@api/core";
import Form from "@components/forms/Form";
import InputCheck from "@components/forms/InputCheck";
import InputNumber from "@components/forms/InputNumber";
import Select from "@components/forms/Select";
import { ArmorProps, SpellProps } from "@core/interfaces/actions";
import { NonPlayableCharacterProps } from "@core/interfaces/characters";
import { Entity, ENTITY } from "@layouts/Entity";
import { getOptions } from "@utils/forms";
import React, { useEffect, useState } from "react";

export const NonPlayableGET: React.FC = () => {
  return (
    <>
      <h1>NonPlayableGET</h1>
    </>
  );
};

export const NonPlayableLIST: React.FC = () => {
  return (
    <>
      <h1>NonPlayableLIST</h1>
    </>
  );
};

export const NonPlayablePOST: React.FC = () => {
  const DATA: NonPlayableCharacterProps = {
    ...ENTITY,
    challenge: 1,
    legendary_creature: false,
    spells: [],
    armor: undefined,
  };
  const [form, setForm] = useState<NonPlayableCharacterProps>(DATA);
  const [armors, setArmors] = useState<ArmorProps[]>([]);
  const [spells, setSpells] = useState<SpellProps[]>([]);

  useEffect(() => {
    axiosGET(armorURL, setArmors);
    axiosGET(spellURL, setSpells);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(nonPlayableURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create NPC"} onSubmit={handleSubmit}>
      <Entity value={form} setValue={setForm} />
      <InputNumber
        label={"Challenge"}
        value={form.challenge}
        setValue={setForm}
        min={1}
        max={34}
        required={true}
      />
      <InputCheck
        label={"Legendary creature?"}
        value={form.legendary_creature}
        setValue={setForm}
      />
      <Select
        label={"Armor"}
        value={form.armor}
        setValue={setForm}
        options={getOptions(armors)}
      />
      <Select
        label={"Known spells"}
        value={form.spells}
        setValue={setForm}
        options={getOptions(spells)}
        multiple={true}
      />
    </Form>
  );
};

export const NonPlayablePUT: React.FC = () => {
  return (
    <>
      <h1>NonPlayablePUT</h1>
    </>
  );
};
