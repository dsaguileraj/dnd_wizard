import axios from "axios";
import { URL } from "@api/core";

const BASE_URL = `${URL}/matches`;

export const playableInstance = axios.create({
  baseURL: `${BASE_URL}/match/`,
});
