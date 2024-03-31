import { AxiosRequestConfig } from "axios";
import { axiosInstance as axios } from "../../utils/axios";
import { UserResponse } from "./homeTypes";

const whoAmIUrl = "/auth/whoami";

export async function sendWhoami(token: string) {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const res = await axios.get<UserResponse>(whoAmIUrl, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
