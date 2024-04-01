import { AxiosRequestConfig } from "axios";
import { AssetMinimalResponse } from "./assetTypes";
import { axiosInstance as axios } from "../../../utils/axios";

const getAllUrl = "/assets";

export async function getAssets(token: string) {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const res = await axios.get<AssetMinimalResponse[]>(getAllUrl, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
