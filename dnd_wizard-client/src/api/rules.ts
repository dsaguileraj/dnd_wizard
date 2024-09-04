import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/rules`;

export const categoryURL = axios.create({
  baseURL: `${BASE_URL}/category/`,
});

export const conditionURL = axios.create({
  baseURL: `${BASE_URL}/condition/`,
});

export const creatureTypeURL = axios.create({
  baseURL: `${BASE_URL}/creature_type/`,
});

export const damageTypeURL = axios.create({
  baseURL: `${BASE_URL}/damage_type/`,
});

export const featureURL = axios.create({
  baseURL: `${BASE_URL}/feature/`,
});

export const languageURL = axios.create({
  baseURL: `${BASE_URL}/language/`,
});

export const magicSchoolURL = axios.create({
  baseURL: `${BASE_URL}/magic_school/`,
});

export const skillURL = axios.create({
  baseURL: `${BASE_URL}/skill/`,
});

export const propertyURL = axios.create({
  baseURL: `${BASE_URL}/property/`,
});
