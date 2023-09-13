import axios from "axios";

export const salesHttpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "//localhost:3001",
});
