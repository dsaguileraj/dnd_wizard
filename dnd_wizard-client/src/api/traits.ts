import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/traits`;

export const backgroundInstance = axios.create({
  baseURL: `${BASE_URL}/background/`,
});

export const bondInstance = axios.create({
  baseURL: `${BASE_URL}/bond/`,
});

export const classInstance = axios.create({
  baseURL: `${BASE_URL}/class/`,
});

export const flawInstance = axios.create({
  baseURL: `${BASE_URL}/flaw/`,
});

export const idealInstance = axios.create({
  baseURL: `${BASE_URL}/ideal/`,
});

export const personalityInstance = axios.create({
  baseURL: `${BASE_URL}/personality/`,
});

export const progressInstance = axios.create({
  baseURL: `${BASE_URL}/class_table/`,
});

export const raceInstance = axios.create({
  baseURL: `${BASE_URL}/race/`,
});
