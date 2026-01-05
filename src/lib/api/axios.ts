import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // 🔑 SEND HTTP-ONLY COOKIE
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
