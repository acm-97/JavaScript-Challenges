/**
 * It calculates the price of buying a fidelity card for a given number of times, and compares it to
 * the price of buying the same number of tickets without a fidelity card
 * @param times - the number of times you'll be buying the item
 * @returns A boolean value.
 */
export default function shouldBuyFidelity(times) {
  const fidelityPrice = [...Array(times).keys()].reduce(
    (acc, curr) => acc + 12 * 0.75 ** (curr + 1),
    250
  );
  return fidelityPrice < 12 * times;
}

// console.log(shouldBuyFidelity(3));
