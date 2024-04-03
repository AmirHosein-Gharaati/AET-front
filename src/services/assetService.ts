import { AssetFractionResponse, AssetSummaryResponse } from "@/types/asset";
import { AxiosService } from "./axiosService";

class AssetService extends AxiosService {
  private url: string;

  constructor() {
    super();
    this.url = "/assets";
  }

  getAssets(token: string) {
    const config = this.getAuthConfig(token);

    return this.axios.get<AssetFractionResponse[]>(this.url, config);
  }

  getAssetSummary(id: string, token: string) {
    const config = this.getAuthConfig(token);

    return this.axios.get<AssetSummaryResponse>(
      `${this.url}/${id}/summary`,
      config
    );
  }
}

export const assetService = new AssetService();
