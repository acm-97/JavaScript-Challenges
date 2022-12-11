import { mecenas } from "./mecenas.js";

function battleRoyale(newArr) {
  let index = 0;

  while (newArr.length > 1) {
    if (index > newArr.length - 1) {
      battleRoyale(newArr);
      return;
    }

    if (index === newArr.length - 1) {
      newArr.splice(0, 1);
      battleRoyale(newArr);
      return;
    }

    newArr.splice(index + 1, 1);
    index++;
  }
  console.log(newArr);
  return newArr;
}

const arr = mecenas.map((value, index) => ({value, index}))

console.log("result: ", battleRoyale(arr));
