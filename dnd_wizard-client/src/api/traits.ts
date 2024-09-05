import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/traits`;

export const backgroundURL = axios.create({
  baseURL: `${BASE_URL}/background/`,
});

export const bondURL = axios.create({
  baseURL: `${BASE_URL}/bond/`,
});

export const classURL = axios.create({
  baseURL: `${BASE_URL}/class/`,
});

export const flawURL = axios.create({
  baseURL: `${BASE_URL}/flaw/`,
});

export const idealURL = axios.create({
  baseURL: `${BASE_URL}/ideal/`,
});

export const personalityURL = axios.create({
  baseURL: `${BASE_URL}/personality/`,
});

export const progressURL = axios.create({
  baseURL: `${BASE_URL}/class_table/`,
});

export const raceURL = axios.create({
  baseURL: `${BASE_URL}/race/`,
});
