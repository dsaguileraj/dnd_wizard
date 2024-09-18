import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/characters`;

export const playableURL = axios.create({
  baseURL: `${BASE_URL}/playable/`,
});

export const nonPlayableURL = axios.create({
  baseURL: `${BASE_URL}/non-playable/`,
});
