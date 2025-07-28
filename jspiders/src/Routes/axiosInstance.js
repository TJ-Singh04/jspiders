import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL:"http://localhost:8080/jspiders",
    withCredentials:true,
})
AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});