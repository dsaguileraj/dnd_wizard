import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/rules`;

export const categoryInstance = axios.create({
  baseURL: `${BASE_URL}/category/`,
});

export const conditionInstance = axios.create({
  baseURL: `${BASE_URL}/condition/`,
});

export const creatureTypeInstance = axios.create({
  baseURL: `${BASE_URL}/creature_type/`,
});

export const damageTypeInstance = axios.create({
  baseURL: `${BASE_URL}/damage_type/`,
});

export const featureInstance = axios.create({
  baseURL: `${BASE_URL}/feature/`,
});

export const languageInstance = axios.create({
  baseURL: `${BASE_URL}/language/`,
});

export const magicSchoolInstance = axios.create({
  baseURL: `${BASE_URL}/magic_school/`,
});

export const skillInstance = axios.create({
  baseURL: `${BASE_URL}/skill/`,
});

export const propertyInstance = axios.create({
  baseURL: `${BASE_URL}/property/`,
});
