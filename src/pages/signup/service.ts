import { axiosInstance as axios } from "../../utils/axios";
import { SingUpRequest, SignUpResponse } from "./models";

export async function handleSignUp(
  username: string,
  password: string,
  confirmPassword: string
) {
  const request: SingUpRequest = {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  };

  const signUpUrl = "/auth/signup";

  try {
    const res = await axios.post<SignUpResponse>(signUpUrl, request);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
