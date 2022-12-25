/**
 * It returns the maximum number of gifts that can be collected by visiting at most maxCities cities,
 * where each city has at most maxGifts gifts
 * @param {number[]} giftsCities - number[] - an array of gifts in each city
 * @param {number} maxGifts - The maximum number of gifts that can be collected in a city.
 * @param {number} maxCities - The maximum number of cities you can visit.
 * @returns The maximum number of gifts that can be collected from the cities.
 */
function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
): number {
  const allowedGiftsCities = giftsCities.filter(
    (giftsCity) => giftsCity <= maxGifts
  );

  if (allowedGiftsCities.length === 0) return 0;
  if (allowedGiftsCities.length === 1) return allowedGiftsCities[0];
  if (maxCities === 1) return Math.max(...allowedGiftsCities);

  return Math.max(
    ...allowedGiftsCities.map(
      (giftsCity, index) =>
        giftsCity +
        getMaxGifts(
          allowedGiftsCities.slice(index + 1),
          maxGifts - giftsCity,
          maxCities - 1
        )
    )
  );
}

/**
 * It returns the maximum number of gifts that can be collected by visiting at most maxCities cities,
 * where each city has at most maxGifts gifts
 * @param {number[]} giftsCities - an array of integers representing the number of gifts in each city
 * @param {number} maxGifts - The maximum number of gifts that can be collected in a city.
 * @param {number} maxCities - The maximum number of cities you can visit.
 * @returns The maximum number of gifts that can be collected from the cities.
 */
export default function getMaxGiftsOptimized(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
): number {
  const allowedGiftsCities = giftsCities.filter(
    (giftsCity) => giftsCity <= maxGifts
  );

  if (allowedGiftsCities.length <= 1 || maxCities === 1) {
    return Math.max(0, ...allowedGiftsCities);
  }

  return Math.max(
    ...allowedGiftsCities.map(
      (giftsCity, index) =>
        giftsCity +
        getMaxGiftsOptimized(
          allowedGiftsCities.slice(index + 1),
          maxGifts - giftsCity,
          maxCities - 1
        )
    )
  );
}
