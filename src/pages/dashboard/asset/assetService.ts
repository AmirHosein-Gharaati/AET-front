import { AxiosRequestConfig } from "axios";
import { AssetFractionResponse } from "./assetTypes";
import { axiosInstance as axios } from "../../../utils/axios";

const getAllUrl = "/assets";

export async function getAssets(token: string) {
  const config: AxiosRequestConfig = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  try {
    const res = await axios.get<AssetFractionResponse[]>(getAllUrl, config);
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
