import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/actions`;

export const armorURL = axios.create({
  baseURL: `${BASE_URL}/armor/`,
});

export const equipmentURL = axios.create({
  baseURL: `${BASE_URL}/equipment/`,
});

export const spellURL = axios.create({
  baseURL: `${BASE_URL}/spell/`,
});

export const toolURL = axios.create({
  baseURL: `${BASE_URL}/tool/`,
});

export const trinketURL = axios.create({
  baseURL: `${BASE_URL}/trinket/`,
});

export const weaponURL = axios.create({
  baseURL: `${BASE_URL}/weapon/`,
});
