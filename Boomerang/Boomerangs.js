const array = [2, 1, 2, 3, 3, 3, 4, 2, 4, 6, 4];

let boomerangs = [];
let index = 0;

while (index < array.length - 2) {
  if (array[index] === array[index + 2] && array[index] !== array[index + 1])
    boomerangs.push(array.slice(index, index + 3));
  index++;
}

console.log('Boomerangs: ', boomerangs.length)
console.log(boomerangs);
