/**
 * It creates a cube of size n by creating a top half of the cube, then reversing the bottom half and
 * joining them together.
 * @param {number} size - The size of the cube.
 * @returns A string of characters that when printed to the console, will display a cube.
 */
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

/**
 * It creates a cube of size `size` by creating the top half of the cube with `size` rows, each row
 * having `size - i` spaces, `i` `/\`s, and `size` `_\`s, where `i` is the row number, and then
 * creating the bottom half of the cube with `size` rows, each row having `size - i` spaces, `i` `\/`s,
 * and `size` `_/`s, where `i` is the row number, and then joining the top and bottom halves with
 * newlines
 * @param {number} size - The size of the cube.
 * @returns A string of a cube.
 */
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