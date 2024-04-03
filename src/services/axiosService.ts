import axios from "axios";
import { Axios } from "axios";

export const baseURL = "http://localhost:8080/aet/v1";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

export class AxiosService {
  axios: Axios;

  constructor() {
    this.axios = axiosInstance;
  }
}
