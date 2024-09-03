import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/characters`;

export const playableInstance = axios.create({
  baseURL: `${BASE_URL}/playable/`,
});

export const nonPlayableInstance = axios.create({
  baseURL: `${BASE_URL}/non-playable/`,
});
