function getRandomItem(arr, lenght = 1) {
  let items = "";
    const randomIndex = Math.floor(Math.random() * arr.length);
    items = arr[randomIndex];
  return items;
}

// get a random item from an array
function getRandomList(arr, lenght = 1) {
  let items = "";
  for (let index = 0; index < lenght; index++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    items += arr[randomIndex];
  }
  return items;
}

// check if an array contains only numbres
function isOnlyNumbers(array) {
  return array.every(element => {
    return !isNaN(element);
  });
}

export {getRandomItem, getRandomList, isOnlyNumbers }