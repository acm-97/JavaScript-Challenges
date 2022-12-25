function selectSleigh(
  distance: number,
  sleighs: { name: string; consumption: number }[]
): string | null {
  // @ts-ignore
  const bestSleigh = sleighs.findLast(
    (sleight: { name: string; consumption: number }) =>
      sleight.consumption * distance <= 20
  );

  return bestSleigh?.name || null;
}

function selectSleighOptimized(
  distance: number,
  sleighs: { name: string | null; consumption: number }[]
): string | null {
  sleighs.unshift({ name: null, consumption: 0 });
  sleighs.push({ name: "Too much consumption", consumption: 21 });

  const invalidSleighIndex = sleighs.findIndex(
    (sleight) => sleight.consumption * distance > 20
  );

  return sleighs[invalidSleighIndex - 1].name;
}
