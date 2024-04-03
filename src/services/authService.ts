import { AxiosRequestConfig } from "axios";
import { AxiosService } from "./axiosService";
import { LoginRequest, LoginResponse, UserResponse } from "@/types/auth";

class AuthService extends AxiosService {
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

  login(data: LoginRequest) {
    return this.axios.post<LoginResponse>(this.url, data);
  }
}

export const authService = new AuthService();
