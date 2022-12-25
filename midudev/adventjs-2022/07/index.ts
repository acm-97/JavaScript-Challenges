/**
 * "For each gift in each list, if that gift is not in the other two lists, add it to the set of gifts
 * to refill."
 * The Set data structure is used to ensure that each gift is only added once.
 * @param {string[]} a1 - ["toys", "books", "candies"]
 * @param {string[]} a2 - ["ball", "book", "pen"]
 * @param {string[]} a3 - ["ball", "book", "pen"]
 * @returns An array of strings.
 */
function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  const toRefill = new Set();

  a1.forEach((gift) => {
    if (!a2.includes(gift) && !a3.includes(gift)) toRefill.add(gift);
  });

  a2.forEach((gift) => {
    if (!a1.includes(gift) && !a3.includes(gift)) toRefill.add(gift);
  });

  a3.forEach((gift) => {
    if (!a1.includes(gift) && !a2.includes(gift)) toRefill.add(gift);
  });

  return [...toRefill];
}

/**
 * It returns an array of unique values from the three arrays, filtered to only include values that
 * appear in only one of the three arrays
 * @param {string[]} a1
 * @param {string[]} a2
 * @param {string[]} a3
 * @returns an array of strings that are unique to each array.
 */
export default function getGiftsToRefillOptimized(
  a1: string[],
  a2: string[],
  a3: string[]
) {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    (value) =>
      // @ts-ignore
      a1.includes(value) + a2.includes(value) + a3.includes(value) === 1
  );
}