/**
 * It loops through the coins array, starting with the largest coin, and subtracts the largest coin
 * from the change amount until the change amount is less than the largest coin. Then it moves on to
 * the next largest coin and repeats the process
 * @param change - the amount of change to be given
 * @returns An array of the number of coins of each denomination.
 */
export function _getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  let result = []

  for (let i = coins.length - 1; i >= 0; i--) {
    const cant = Math.floor(change / coins[i]);
    result[i] = cant;
    change = change - coins[i] * cant;
  }
  return result;
}


/**
 * It returns an array of coins that can be used to make change for a given amount.
 * @param change - the amount of change to be given
 * @returns An array of the number of coins of each denomination.
 */
export function getCoins(change) {
  return [50, 20, 10, 5, 2, 1]
    .map(value => {
      const coins = Math.floor(change / value)
      change %= value

      return coins
    })
    .reverse()
}