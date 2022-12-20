/**
 * Sort the boxes by their total dimensions, then check if each box is smaller than the previous one
 * @returns A boolean value.
 */
function fitsInOneBox(boxes: { l: number; w: number; h: number }[]) {
  boxes = boxes.sort((a, b) => a.l + a.w + a.h - (b.l + b.w + b.h));

  for (let i = 1; i < boxes.length; i++) {
    const prev = Object.values(boxes[i - 1]);
    const curr = Object.values(boxes[i]);
    if (prev.some((box, j) => box >= curr[j])) {
      return false;
    }
  }

  return true;
}

/**
 * Sort the boxes by length, then check if each box is larger than the previous box in all dimensions
 * @returns A boolean value.
 */
export default function fitsInOneBoxOptimized(
  boxes: { l: number; w: number; h: number }[]
) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i, arr) => {
      const prevBox = arr[i - 1];
      return (
        i === 0 || (box.l > prevBox.l && box.w > prevBox.w && box.h > prevBox.h)
      );
    });
}
