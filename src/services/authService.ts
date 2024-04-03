import { AxiosService } from "./axiosService";
import {
  LoginRequest,
  LoginResponse,
  SignUpResponse,
  SingUpRequest,
  UserResponse,
} from "@/types/auth";

class AuthService extends AxiosService {
  private url: string;

  constructor() {
    super();
    this.url = "/auth";
  }

  whoami(token: string) {
    const config = this.getAuthConfig(token);

    return this.axios.get<UserResponse>(`${this.url}/whoami`, config);
  }

  login(data: LoginRequest) {
    return this.axios.post<LoginResponse>(`${this.url}/login`, data);
  }

  signup(data: SingUpRequest) {
    return this.axios.post<SignUpResponse>(`${this.url}/signup`, data);
  }
}

export const authService = new AuthService();
