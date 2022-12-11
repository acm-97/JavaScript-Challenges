import { mecenas } from "./mecenas.js";

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
