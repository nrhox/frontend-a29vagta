import axios from "axios";
import { encodeFixedToken, generateDynamicToken } from "./token";

let cachedIP: string | null = sessionStorage.getItem("client_ip");

export const initClientIP = async () => {
  if (!cachedIP) {
    try {
      const res = await axios.get("https://api.ipify.org?format=json");
      cachedIP = res.data.ip;
      sessionStorage.setItem("client_ip", cachedIP!);
    } catch {
      cachedIP = "0.0.0.0";
    }
  }
  return cachedIP;
};

const axiosInstance = axios.create({
  baseURL:
    (
      (import.meta.env.VITE_PRODUCTION as string | undefined) ?? "false"
    ).toLowerCase() === "true"
      ? (import.meta.env.VITE_BACKEND_URL as string | undefined) ||
        "http://localhost:3030"
      : "http://localhost:3030",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const userIP = cachedIP || (await initClientIP());
    const tokenIp = encodeFixedToken(
      userIP ?? "",
      (import.meta.env.VITE_SECRET_KEY_SALT as string | undefined) ??
        "tukang bakso",
    );

    const tokenKey = await generateDynamicToken(
      (import.meta.env.VITE_SECRET_KEY_SALT as string | undefined) ??
        "tukang bakso",
    );

    config.headers["x-api-token"] = tokenKey;
    config.headers["x-entropy"] = tokenIp;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
