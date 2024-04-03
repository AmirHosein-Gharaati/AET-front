import { AxiosRequestConfig } from "axios";
import { AxiosService } from "./axiosService";
import { UserResponse } from "@/types/home";

class HomeService extends AxiosService {
  url: string;

  constructor() {
    super();
    this.url = "/auth/whoami";
  }

  whoami(token: string) {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return this.axios.get<UserResponse>(this.url, config);
  }
}

export const homeService = new HomeService();
