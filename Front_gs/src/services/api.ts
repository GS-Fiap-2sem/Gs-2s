import axios from "axios";
const baseURL = ((import.meta as any).env?.VITE_API_URL as string) || "https://java-gs-2-1.onrender.com/api";

export const api = axios.create({
  baseURL,
});
