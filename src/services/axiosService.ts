import axios, { AxiosRequestConfig } from "axios";
import { Axios } from "axios";

export const baseURL = "http://localhost:8080/aet/v1";

export const axiosInstance = axios.create({
  baseURL: baseURL,
});

export class AxiosService {
  protected axios: Axios;

  constructor() {
    this.axios = axiosInstance;
  }

  protected getAuthConfig(token: string): AxiosRequestConfig {
    return {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  }
}
