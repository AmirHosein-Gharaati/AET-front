import { AssetFractionResponse } from "@/types/asset";
import { AxiosService } from "./axiosService";

class AssetService extends AxiosService {
  url: string;

  constructor() {
    super();
    this.url = "/assets";
  }

  getAssets(token: string) {
    const config = this.getAuthConfig(token);

    return this.axios.get<AssetFractionResponse[]>(this.url, config);
  }
}

export const assetService = new AssetService();
