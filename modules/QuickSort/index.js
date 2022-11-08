import {isOnlyNumbers, getRandomItems} from '../../utils/index.js'
  
function QuickSort(array, first = 0, last = array.length - 1) {
  // first item of the array
  let i = first;
  // last item of the array
  let j = last;
  const pivote = isOnlyNumbers(array) ? (array[i] + array[j]) / 2 : getRandomItems(array);
  
  while (i < j) {
    while (array[i] < pivote) {
      i++;
    }
    while (array[j] > pivote) {
      j--;
    }
    if (i <= j) {
      const x = array[j];
      array[j] = array[i];
      array[i] = x;
      i++;
      j--;
    }
  }

  if (first < j) {
    array = QuickSort(array, first, j)
  }
  if (last > i) {
    array = QuickSort(array, i, last)
  }

  return array;
}

const arrayNumbers = [2, 4, 6, 3, 5, 6, 3, 2, 7, 5];
console.log(QuickSort(arrayNumbers));

const arrayStrings = ['Lily', 'Alejandro', 'Molly', 'Alex', 'Chris', 'Nate', 'Bella'];
console.log(QuickSort(arrayStrings));