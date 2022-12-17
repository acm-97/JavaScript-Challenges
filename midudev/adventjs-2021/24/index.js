/**
 * It checks if the two trees are the same, or if one of them is the inverted version of the other
 * @param treeA - {object}
 * @param treeB - {object}
 * @returns A function that takes two trees as arguments and returns a boolean.
 */
export default function checkIsSameTree(treeA, treeB) {
  const checkNodes = (leftNode, rigthNode) => {
    if (!leftNode && !rigthNode) return true;
    if (!leftNode && rigthNode) return false;
    if (leftNode && !rigthNode) return false;
    if (leftNode.value !== rigthNode.value) return false;

    return (
      checkNodes(leftNode.left, rigthNode.left) &&
      checkNodes(leftNode.right, rigthNode.right)
    );
  };

  const invertedTree = (tree) =>
    JSON.parse(
      JSON.stringify(tree)
        .replaceAll("left", "temp")
        .replaceAll("right", "left")
        .replaceAll("temp", "right")
    );

  return (
    checkNodes(treeA, treeB) ||
    checkNodes(treeA, invertedTree(treeB)) ||
    checkNodes(invertedTree(treeA), treeB)
  );
}

// const treeA = {
//   value: 1,
//   left: { value: 2, left: null, right: null },
//   right: { value: 3, left: null, right: null },
// };
// const treeB = {
//   value: 1,
//   left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
//   right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
// };

// console.log(checkIsSameTree(treeA, treeA));
// console.log(checkIsSameTree(treeA, treeB));
