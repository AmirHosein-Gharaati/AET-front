import { axiosInstance as axios } from "../../utils/axios";
import { LoginRequest, LoginResponse } from "./loginTypes";

const loginUrl = "/auth/login";

export async function handleLogin(username: string, password: string) {
  const data: LoginRequest = {
    username: username,
    password: password,
  };

  try {
    const res = await axios.post<LoginResponse>(loginUrl, data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
