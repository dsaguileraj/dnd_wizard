import {
  armorURL,
  equipmentURL,
  spellURL,
  toolURL,
  trinketURL,
} from "@api/actions";
import { playableURL } from "@api/characters";
import { axiosGET, axiosPOST } from "@api/core";
import { backgroundURL, classURL } from "@api/traits";
import Form from "@components/forms/Form";
import InputNumber from "@components/forms/InputNumber";
import Select from "@components/forms/Select";
import {
  AdventureGearProps,
  ArmorProps,
  SpellProps,
  ToolProps,
  TrinketProps,
} from "@core/interfaces/actions";
import { PlayableCharacterProps } from "@core/interfaces/characters";
import { BackgroundProps, EntityClassProps } from "@core/interfaces/traits";
import { Entity, ENTITY } from "@layouts/Entity";
import { getOptions } from "@utils/forms";
import React, { useEffect, useState } from "react";

export const PlayableGET: React.FC = () => {
  return (
    <>
      <h1>PlayableGET</h1>
    </>
  );
};

export const PlayableLIST: React.FC = () => {
  return (
    <>
      <h1>PlayableLIST</h1>
    </>
  );
};

export const PlayablePOST: React.FC = () => {
  const DATA: PlayableCharacterProps = {
    ...ENTITY,
    adventure_gears: [],
    armor: [],
    copper: 0,
    electrum: 0,
    experience: 0,
    gold: 0,
    inspiration: false,
    platinum: 0,
    player: 1,
    silver: 0,
    spells: [],
    tools: [],
    trinkets: [],
    background: undefined,
    bond: undefined,
    entity_class: undefined,
    flaw: undefined,
    ideal: undefined,
    personality: undefined,
  };
  const [form, setForm] = useState<PlayableCharacterProps>(DATA);
  const [adventureGears, setAdventureGears] = useState<AdventureGearProps[]>(
    []
  );
  const [armors, setArmors] = useState<ArmorProps[]>([]);
  const [spells, setSpells] = useState<SpellProps[]>([]);
  const [tools, setTools] = useState<ToolProps[]>([]);
  const [trinkets, setTrinkets] = useState<TrinketProps[]>([]);
  const [backgrounds, setBackgrounds] = useState<BackgroundProps[]>([]);
  const [classes, setClasses] = useState<EntityClassProps[]>([]);

  useEffect(() => {
    axiosGET(equipmentURL, setAdventureGears);
    axiosGET(armorURL, setArmors);
    axiosGET(spellURL, setSpells);
    axiosGET(toolURL, setTools);
    axiosGET(trinketURL, setTrinkets);
    axiosGET(backgroundURL, setBackgrounds);
    axiosGET(classURL, setClasses);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(playableURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Character"} onSubmit={handleSubmit}>
      <Entity value={form} setValue={setForm} />
      <InputNumber
        label={"Experience"}
        value={form.experience}
        setValue={setForm}
        min={0}
        required={true}
      />
      <h2>Traits</h2>
      <Select
        label={"Class"}
        value={form.entity_class}
        setValue={setForm}
        options={getOptions(classes)}
      />
      <h3>Background</h3>
      <Select
        label={"Background"}
        value={form.background}
        setValue={setForm}
        options={getOptions(backgrounds)}
      />
      <h2>Inventory</h2>
      <Select
        label={"Adventure Gear"}
        value={form.adventure_gears}
        setValue={setForm}
        options={getOptions(adventureGears)}
        multiple={true}
      />
      <Select
        label={"Armor"}
        value={form.armor}
        setValue={setForm}
        options={getOptions(armors)}
        multiple={true}
      />
      <Select
        label={"Spells"}
        value={form.spells}
        setValue={setForm}
        options={getOptions(spells)}
        multiple={true}
      />
      <Select
        label={"Tools"}
        value={form.tools}
        setValue={setForm}
        options={getOptions(tools)}
        multiple={true}
      />
      <Select
        label={"Trinkets"}
        value={form.trinkets}
        setValue={setForm}
        options={getOptions(trinkets)}
        multiple={true}
      />
      <h3>Coins</h3>
      <InputNumber
        label={"Copper"}
        value={form.copper}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Silver"}
        value={form.silver}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Electrum"}
        value={form.electrum}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Gold"}
        value={form.gold}
        setValue={setForm}
        min={0}
        required={true}
      />
      <InputNumber
        label={"Platinum"}
        value={form.platinum}
        setValue={setForm}
        min={0}
        required={true}
      />
    </Form>
  );
};

export const PlayablePUT: React.FC = () => {
  return (
    <>
      <h1>PlayablePUT</h1>
    </>
  );
};
