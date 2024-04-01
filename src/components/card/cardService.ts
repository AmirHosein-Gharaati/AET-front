export function calculateGainLossByPercent(
  totalAmount: number,
  totalCost: number,
  currentPrice: number
) {
  if (totalCost === 0) return 0;
  const totalValue = Math.round(totalAmount * currentPrice * 10) / 10;
  return Math.round((totalValue / totalCost - 1) * 100);
}
