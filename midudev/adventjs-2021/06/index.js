export default function sumPairs(numbers, result) {
  let arr = null;
  let count = numbers.length - 1;
  let pivot = numbers[0];
  let _numbers = numbers;

  while (count >= 0 && !arr) {
    _numbers.forEach((value, i) => {
      const sum = value + pivot;
      arr = sum === result ? [pivot, value] : arr;
    });
    pivot = _numbers[0];
    _numbers = _numbers.slice(1, _numbers.length);
    count--;
  }

  return arr;
}