/**
 * If the two arrays are the same length, and each element in the first array maps to a unique element
 * in the second array, and each element in the second array maps to a unique element in the first
 * array, then the two arrays can be reconfigured
 * @param from - [1, 2, 3, 4]
 * @param to - [1, 2, 3, 4]
 * @returns A boolean value.
 */
export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  const fromMap = new Map();
  const toMap = new Map();

  for (let i = 0; i < from.length; i++) {
    if (fromMap.has(from[i]) && fromMap.get(from[i]) !== to[i]) return false;
    if (toMap.has(to[i]) && toMap.get(to[i]) !== from[i]) return false;

    fromMap.set(from[i], to[i]);
    toMap.set(to[i], from[i]);
  }
  return true;
}

// const from = "XBOX";
// const to = "XXBO";
// console.log(canReconfigure(from, to));
