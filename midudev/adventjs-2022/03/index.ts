/**
 * It takes an array of strings (`packOfGifts`) and an array of strings (`reindeers`) and returns a number
 * @returns The number of gifts each reindeer can carry.
 */
export default function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const giftsCount = packOfGifts.reduce((acc, curr) => acc + curr.length, 0)
  const weightLimit = reindeers.reduce((acc, curr) => acc + curr.length * 2, 0)
  return Math.floor(weightLimit/giftsCount)
}