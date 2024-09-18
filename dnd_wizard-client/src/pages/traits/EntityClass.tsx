import { spellURL } from "@api/actions";
import { axiosGET, axiosPOST } from "@api/core";
import { classURL } from "@api/traits";
import Form from "@components/forms/Form";
import InputCheck from "@components/forms/InputCheck";
import InputText from "@components/forms/InputText";
import Select from "@components/forms/Select";
import { DICES, STATS } from "@core/choices";
import { SpellProps } from "@core/interfaces/actions";
import { EntityClassProps } from "@core/interfaces/traits";
import { PROFICIENCY_TRAIT, ProficiencyTrait } from "@layouts/ProficiencyTrait";
import { getOptions } from "@utils/forms";
import React, { useEffect, useState } from "react";

export const ClassGET: React.FC = () => {
  return (
    <>
      <h1>ClassGET</h1>
    </>
  );
};

export const ClassLIST: React.FC = () => {
  return (
    <>
      <h1>ClassLIST</h1>
    </>
  );
};

export const ClassPOST: React.FC = () => {
  const DATA: EntityClassProps = {
    ...PROFICIENCY_TRAIT,
    hit_dice: DICES[0].value,
    innate_spellcaster: false,
    name: "",
    spell_list: [],
    ability: undefined,
  };
  const [form, setForm] = useState<EntityClassProps>(DATA);
  const [spells, setSpells] = useState<SpellProps[]>([]);

  useEffect(() => axiosGET(spellURL, setSpells), []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axiosPOST(classURL, form, setForm(DATA));
  };

  return (
    <Form header={"Create Class"} onSubmit={handleSubmit}>
      <InputText
        label={"Name"}
        value={form.name}
        setValue={setForm}
        required={true}
      />
      <ProficiencyTrait value={form} setValue={setForm} />
      <h2>Spellcasting</h2>
      <InputCheck
        label={"Innate spellcaster?"}
        value={form.innate_spellcaster}
        setValue={setForm}
      />
      <Select
        label={"Ability"}
        value={form.ability}
        setValue={setForm}
        options={STATS}
        required={form.innate_spellcaster}
        disabled={!form.innate_spellcaster}
      />
      <Select
        label={"Spell list"}
        value={form.spell_list}
        setValue={setForm}
        options={getOptions(spells)}
        multiple={true}
        required={form.innate_spellcaster}
        disabled={!form.innate_spellcaster}
      />
    </Form>
  );
};

export const ClassPUT: React.FC = () => {
  return (
    <>
      <h1>ClassPUT</h1>
    </>
  );
};
