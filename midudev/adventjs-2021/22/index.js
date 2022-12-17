/**
 * It takes a tree and returns the sum of all the values in the tree
 * @param bigTree - a tree data structure, where each node has a value property.
 * @returns The total number of decorations in the tree.
 */
export default function countDecorations(bigTree) {
  if (!bigTree || typeof bigTree !== "object") return 0;

  const { value, ...rest } = bigTree;

  return Object.values(rest).reduce(
    (acc, curr) => acc + countDecorations(curr),
    value
  );
}

// const tree = {
//   value: 1,
//   left: {
//     value: 2,
//     left: null,
//     right: null,
//   },
//   right: {
//     value: 3,
//     left: null,
//     right: null,
//   },
// };

// console.log(countDecorations(tree));
