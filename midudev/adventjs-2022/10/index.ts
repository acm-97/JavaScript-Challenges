/**
 * It checks if the array is non-empty, if the max value is not at the start or end of the array, and
 * if the values before the max value are in ascending order and the values after the max value are in
 * descending order
 * @param {number[]} heights - an array of integers representing the heights of the buildings
 * @returns A boolean value.
 */
export default function checkJump(heights: number[]) {
  const maxHeightIndex = heights.indexOf(Math.max(...heights))

  return (
    maxHeightIndex > 0 &&
    maxHeightIndex !== heights.length - 1 &&
    heights
      .slice(1, maxHeightIndex + 1)
      .every((height, index) => height >= heights[index]) &&
    heights
      .slice(maxHeightIndex + 1)
      .every((height, index) => height <= heights[index + maxHeightIndex])
  )
}