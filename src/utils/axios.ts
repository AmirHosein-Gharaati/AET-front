import axios from "axios";

export const baseURL = "http://localhost:8080/aet/v1";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});
