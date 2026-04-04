import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD
    ? (import.meta.env.BACKEND_URL as string | undefined) ||
      "http://localhost:3030"
    : "http://localhost:3030",
});
