const array = [2, 1, 2, 3, 3, 4, 2, 4];

let boomerang = [];
let index = 0;

while (index < array.length - 2) {
  if (array[index] === array[index + 2]) {
    boomerang.push(array.slice(index, index + 3));
    index += 3;
  } else {
    index++;
  }
}

console.log(boomerang);
