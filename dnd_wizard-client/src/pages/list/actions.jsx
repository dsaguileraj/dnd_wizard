import { useEffect, useState } from "react";
import { getAllQuery } from "../../api.js";
import { findFieldName } from "../../core/utils.js";

export const ArmorList = () => {
  const [armors, setArmors] = useState([]);
  const [categories, SetCategories] = useState([]);
  useEffect(() => {
    getAllQuery(setArmors, "actions", "armor");
    getAllQuery(SetCategories, "rules", "category");
  }, []);
  return (
    <div>
      <h1>Armors</h1>
      <table>
        <thead>
          <tr>
            <th>Armor</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Armor Class (AC)</th>
            <th>Strength</th>
            <th>Stealth</th>
            <th>Weight</th>
            <th colSpan={2}>Options</th>
          </tr>
        </thead>
        <tbody>
          {armors.map((armor) => (
            <tr key={armor.id}>
              <th>{armor.name}</th>
              <th>{findFieldName(categories, armor.category)}</th>
              <th>
                {armor.cost} {armor.coin}
              </th>
              <th>
                {armor.armor_class} {armor.dexterity_bonus && "+ DEX modifier"}
              </th>
              <th>{armor.min_strength}</th>
              <th>{armor.disadvantage_stealth ? "Disadvantage" : "---"}</th>
              <th>{armor.weight} {armor.weight_measure}</th>
              <th>
                <button>Update</button>
              </th>
              <th>
                <button>Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const AdventureGear = () => {
  const [gears, setGears] = useState([]);
  const [categories, SetCategories] = useState([]);
  useEffect(() => {
    getAllQuery(setGears, "actions", "equipment");
    getAllQuery(SetCategories, "rules", "category");
  }, []);
  return (
    <div>
      <h1>Adventure Gear</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th colSpan={2}>Options</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
