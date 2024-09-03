import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/actions`;

export const armorInstance = axios.create({
  baseURL: `${BASE_URL}/armor/`,
});

export const equipmentInstance = axios.create({
  baseURL: `${BASE_URL}/equipment/`,
});

export const spellInstance = axios.create({
  baseURL: `${BASE_URL}/spell/`,
});

export const toolInstance = axios.create({
  baseURL: `${BASE_URL}/tool/`,
});

export const trinketInstance = axios.create({
  baseURL: `${BASE_URL}/trinket/`,
});

export const weaponInstance = axios.create({
  baseURL: `${BASE_URL}/weapon/`,
});
