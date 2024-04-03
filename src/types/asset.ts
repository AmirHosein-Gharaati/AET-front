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
