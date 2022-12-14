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
