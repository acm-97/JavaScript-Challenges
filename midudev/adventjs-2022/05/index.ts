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

export default function getMaxGiftsOptimized(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
): number {
  const allowedGiftsCities = giftsCities.filter(
    (giftsCity) => giftsCity <= maxGifts
  );

  if (allowedGiftsCities.length <= 1 || maxCities === 1) {
    console.log(0, ...allowedGiftsCities);
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
