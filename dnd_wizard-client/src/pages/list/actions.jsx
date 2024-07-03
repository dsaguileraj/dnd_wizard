import { useEffect, useState } from 'react';
import { getAllQuery } from '../../api.js';
import { findFieldName } from '../../core/utils.js';

export const AdventureGear = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllQuery(setItems, 'actions', 'equipment');
    getAllQuery(setCategories, 'rules', 'category');
  }, []);
  return (
    <div>
      <h1>Adventure Gear</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Cost</th>
            <th>Weight</th>
            <th colSpan={2}>Options</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{findFieldName(categories, item.category)}</th>
              <th>
                {item.cost} {item.coin}
              </th>
              <th>
                {item.weight} {item.weight_measure}
              </th>
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

export const ArmorList = () => {
  const [armors, setArmors] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllQuery(setArmors, 'actions', 'armor');
    getAllQuery(setCategories, 'rules', 'category');
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
          {armors.map(armor => (
            <tr key={armor.id}>
              <th>{armor.name}</th>
              <th>{findFieldName(categories, armor.category)}</th>
              <th>
                {armor.cost} {armor.coin}
              </th>
              <th>
                {armor.armor_class} {armor.dexterity_bonus && '+ DEX modifier'} {armor.max_dexterity_bonus ? ` (max ${armor.max_dexterity_bonus})` : ''}
              </th>
              <th>STR {armor.min_strength}</th>
              <th>{armor.disadvantage_stealth ? 'Disadvantage' : '---'}</th>
              <th>
                {armor.weight} {armor.weight_measure}
              </th>
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

export const WeaponList = () => {
  const [weapons, setWeapons] = useState([]);
  const [categories, setCategories] = useState([]);
  const [damageTypes, setDamageTypes] = useState([]);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    getAllQuery(setWeapons, 'actions', 'weapon');
    getAllQuery(setCategories, 'rules', 'category');
    getAllQuery(setDamageTypes, 'rules', 'damage_type');
    getAllQuery(setProperties, 'rules', 'property');
    console.log(properties);
  }, []);
  return (
    <div>
      <h1>Weapons</h1>
      <table>
        <thead>
          <th>Name</th>
          <th>Category</th>
          <th>Cost</th>
          <th>Damage</th>
          <th>Properties</th>
          <th colSpan={2}>Options</th>
        </thead>
        <tbody>
          {weapons.map(weapon => (
            <tr key={weapon.id}>
              <th>{weapon.name}</th>
              <th>{findFieldName(categories, weapon.category)}</th>
              <th>
                {weapon.cost} {weapon.coin}
              </th>
              <th>
                {weapon.hit_dices}
                {weapon.dice_sides} {findFieldName(damageTypes, weapon.damage_type)}
              </th>
              <th>
                {weapon.weight} {weapon.weight_measure}
              </th>
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
