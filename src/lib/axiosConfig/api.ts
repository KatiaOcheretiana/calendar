import axios from "axios";

export const API_URL = import.meta.env.VITE_APP_KEY;

export const api = axios.create({
  baseURL: API_URL,
  //   withCredentials: true,
});
