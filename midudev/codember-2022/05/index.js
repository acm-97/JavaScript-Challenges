import { mecenas } from "./mecenas.js";

/**
 * If the index is greater than the length of the array, call the function again with the array. If the
 * index is equal to the length of the array, remove the first element and call the function again with
 * the array. Otherwise, remove the element at the index plus one and increment the index.
 * @param arr - an array of integers
 * @returns The last element in the array.
 */
export default function battleRoyale(arr) {
  let index = 0;

  while (arr.length > 1) {
    if (index > arr.length - 1) {
      battleRoyale(arr);
    }

    if (index === arr.length - 1) {
      arr.splice(0, 1);
      battleRoyale(arr);
    }

    arr.splice(index + 1, 1);
    index++;
  }
  return arr[0];
}

const arr = mecenas.map((value, index) => ({ value, index }));

console.log("result: ", battleRoyale(arr));
