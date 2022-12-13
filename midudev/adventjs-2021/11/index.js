export default function shouldBuyFidelity(times) {
  const fidelityPrice = [...Array(times).keys()].reduce(
    (acc, curr) => acc + 12 * 0.75 ** (curr + 1),
    250
  );
  return fidelityPrice < 12 * times;
}

// console.log(shouldBuyFidelity(3));
