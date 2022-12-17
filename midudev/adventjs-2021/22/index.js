/**
 * It takes a tree and returns the sum of all the values in the tree
 * @param {{value: {left: object, right: object}}} bigTree - a tree data structure, where each node has a value property.
 * @returns {number} The total number of decorations in the tree.
 */
export default function countDecorations(bigTree) {
  if (!bigTree || typeof bigTree !== "object") return 0;

  const { value, ...rest } = bigTree;

  return Object.values(rest).reduce(
    (acc, curr) => acc + countDecorations(curr),
    value
  );
}
