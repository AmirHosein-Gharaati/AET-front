import { AxiosError } from "axios";
import { ErrorResponse } from "../../models/error";
import { axiosInstance as axios } from "../../utils/axios";
import { SingUpRequest, SignUpResponse } from "./models";

export function handleSignUp(
  e: React.FormEvent,
  username: string,
  password: string,
  confirmPassword: string
) {
  e.preventDefault();

  const request: SingUpRequest = {
    username: username,
    password: password,
    confirmPassword: confirmPassword,
  };

  const signUpUrl = "/auth/signup";

  axios
    .post<SignUpResponse>(signUpUrl, request)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err: AxiosError<ErrorResponse>) => {
      console.error(`error at '${signUpUrl}'`);

      console.log(err.response?.data);
    });
}
