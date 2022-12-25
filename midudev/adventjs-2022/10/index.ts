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