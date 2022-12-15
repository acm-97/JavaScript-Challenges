/**
 * If the max height is not the first or last element, then every element must be less than the element
 * to its right if it is to the left of the max height, and every element must be less than the element
 * to its left if it is to the right of the max height.
 * @param heights - an array of integers representing the heights of the hills
 * @returns A boolean value.
 */
export default function checkSledJump(heights) {
  const maxHeightIndex = heights.indexOf(Math.max(...heights))

  if (maxHeightIndex === 0) return false
  if (maxHeightIndex === heights.length - 1) return false

  const isValidHeight = (height, index, array) => {
    if (index === maxHeightIndex) return true
    if (index < maxHeightIndex && height < array[index + 1]) return true
    if (index > maxHeightIndex && array[index - 1] > height) return true

    return false
  }

  return heights.every(isValidHeight)
}

console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]));
