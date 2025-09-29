import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development" ? "https://localhost:5173" : "/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});