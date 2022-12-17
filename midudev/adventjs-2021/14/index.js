/**
 * It sorts the array, then loops through it, checking if the current number is one more than the
 * previous number. If it is, it continues. If it isn't, it breaks out of the loop and returns the
 * number that should be there. If it gets to the end of the loop, it returns the last number plus one
 * @param {number[]} ids - an array of integers representing the IDs of the reindeer
 * @returns {number} The missing reindeer ID.
 */
export function _missingReindeer(ids) {
  ids = ids.sort((a, b) => a - b);
  let num = -1;
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === num + 1) {
      num += 1;
      continue;
    }

    num += 1;
    break;
  }
  return num === ids[ids.length - 1] ? num + 1 : num;
}

/**
 * `missingReindeer` takes an array of integers and returns the missing integer
 * @param ids - an array of integers representing the IDs of the reindeer
 * @returns The missing reindeer ID.
 */
export function missingReindeer(ids) {
  const unpaired = ids.sort((a, b) => a - b).find((id, index) => id !== index);
  return unpaired ? unpaired - 1 : ids.length;
}
