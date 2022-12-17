/**
 * It takes an array and a function or a string and returns an object with the array's elements grouped
 * by the function's return value or the string's value.
 * @param {any[]} collection - The array to iterate over.
 * @param {(item: any) => number} it - The iteratee to transform keys.
 * @returns {{[number]: any}[]} An object with the key being the value of the property or the result of the function and
 * the value being an array of the objects that have that value.
 */
export default function groupBy(collection, it) {
  return collection.reduce((acc, curr) => {
    const key = typeof it === "function" ? it(curr) : curr[it];
    acc[key] = acc[key] ? [...acc[key], curr] : [curr];
    return acc;
  }, {});
}
