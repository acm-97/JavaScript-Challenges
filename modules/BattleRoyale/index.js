import { mecenas } from "./mecenas.js";

function battleRoyale(arr) {
  let newArr = arr;
  let index = 0;
  let flag =  newArr.filter((val) => val !== "x").length === 1;

  while (index<3) {
    if (newArr.length === 2) {
      newArr.splice(index + 1, 1);
      flag = true;
      return { newArr, index: arr.indexOf(newArr[0]) };
    }

    const head = newArr.splice(index + 1, 1, "x");
    index = index + 2;

    if (head[0] === arr[0]) {
      newArr.splice(0, 1);
    }

    if (index > newArr.length) {
      // newArr = newArr.filter((val) => val !== "x");
      index++;
    }
  }
  return newArr
}

console.log(battleRoyale([...mecenas, mecenas[0]]));
