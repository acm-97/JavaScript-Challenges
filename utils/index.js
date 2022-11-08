function getRandomItems(arr, lenght = 1) {
  let items = "";
    const randomIndex = Math.floor(Math.random() * arr.length);
    items = arr[randomIndex];
  return items;
}

function isOnlyNumbers(array) {
  return array.every(element => {
    return !isNaN(element);
  });
}

export {getRandomItems, isOnlyNumbers }