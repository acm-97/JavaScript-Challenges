function createCube(size: number) {
  const topCube = [...Array(size).keys()].map(
    (val) =>
      `${" ".repeat(size - (val + 1))}${"/\\".repeat(val + 1)}${"_\\".repeat(
        size
      )}`
  );
  const bottomCube = [...Array(size).keys()]
    .map(
      (val) =>
        `${" ".repeat(size - (val + 1))}${"\\/".repeat(val + 1)}${"_/".repeat(
          size
        )}`
    )
    .reverse();

  return [...topCube, ...bottomCube].join("\n");
}

export default function createCubeOptimized(size: number) {
  // i: 1, 2, 3, ..., size
  const topCube = Array.from({ length: size }, (_, i) => i + 1).map(
    (i) => " ".repeat(size - i) + "/\\".repeat(i) + "_\\".repeat(size)
  );

  // i: size, ..., 3, 2, 1
  const bottomCube = Array.from({ length: size }, (_, i) => size - i).map(
    (i) => " ".repeat(size - i) + "\\/".repeat(i) + "_/".repeat(size)
  );

  return [...topCube, ...bottomCube].join("\n");
}