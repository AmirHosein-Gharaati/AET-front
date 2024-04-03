import { itemResponse } from "./item";

export interface AssetFractionResponse {
  id: string;
  name: string;
  imageId?: string;
  totalAmount: number;
  totalCost: number;
  currentPrice: number;
  currencyFrom: string;
  currencyTo: string;
}

export interface AssetSummaryResponse {
  id: string;
  totalCost: number;
  totalAmount: number;
  currencyFrom: string;
  currencyTo: string;
  items: itemResponse[];
}
