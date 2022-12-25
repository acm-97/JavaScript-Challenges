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