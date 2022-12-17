/**
 * It loops through all the numbers from 2 to infinity, and checks if the number is a common divisor of
 * all the obstacles. If it is, it returns the number
 * @param {number[]} obstacles - an array of integers representing the locations of obstacles
 * @returns {number} The smallest number of jumps needed to jump over all the obstacles.
 */
export default function getMinJump(obstacles) {
  if (obstacles.length === 0) return 1;

  for (let i = 2; ; i++) {
    const flag = obstacles.every((val) => val % i !== 0);
    if (flag) {
      return i;
    }
  }
}
