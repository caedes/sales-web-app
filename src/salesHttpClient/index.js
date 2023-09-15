import axios from "axios";

export const defaultApiBaseUrl = "//localhost:3001";

export const salesHttpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl,
});
