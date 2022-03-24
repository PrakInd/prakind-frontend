import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { getToken } from "./Auth";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${getToken()}` }
});
