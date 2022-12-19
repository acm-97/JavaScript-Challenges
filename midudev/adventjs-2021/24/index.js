/**
 * It checks if the two trees are the same, or if one of them is the inverted version of the other
 * @param {{value: {left: object, right: object}}} treeA
 * @param {{value: {left: object, right: object}}} treeB
 * @returns {boolean} A function that takes two trees as arguments and returns a boolean.
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

  console.log(typeof JSON.stringify(treeA).replace("left", "temp"));
  const invertedTree = (tree) =>
    JSON.parse(
      JSON.stringify(tree)
        .replace(/left/g, "temp")
        .replace(/right/g, "left")
        .replace(/temp/g, "right")
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
