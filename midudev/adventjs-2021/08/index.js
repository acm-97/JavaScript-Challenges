/**
 * We reduce the array of prices to the maximum profit we can make by buying at the current price and
 * selling at the highest price after the current price
 * @param prices - an array of integers
 * @returns The maximum profit that can be made by buying and selling a stock.
 */
export default function maxProfit(prices) {
  return prices.reduce((maxProfit, price, index, array) => {
    const profit = Math.max(...array.slice(index + 1)) - price
    return profit > 0 && profit > maxProfit ? profit : maxProfit
  }, -1)
}