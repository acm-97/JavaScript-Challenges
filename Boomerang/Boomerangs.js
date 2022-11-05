const array = [1, 2, 3, 4, 3, 4, 5, 4];

let boomerang = [];
let index = 0;

while (index < array.length - 1) {
  if (array[index] === array[index + 2]) {
    boomerang.push(array.slice(index, index + 3));
    index += 2;
  } else {
    index++;
  }
}

console.log(boomerang);
