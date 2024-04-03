import { AssetFractionResponse } from "@/types/asset";
import { AxiosRequestConfig } from "axios";
import { axiosInstance as axios } from "@/utils/axios";
import { AxiosService } from "../axiosService";

class AssetService extends AxiosService {
  url: string;

  constructor() {
    super();
    this.url = "/assets";
  }

  getAssets(token: string) {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    return axios.get<AssetFractionResponse[]>(this.url, config);
  }
}

export const assetService = new AssetService();
