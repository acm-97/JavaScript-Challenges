/**
 * It takes an array of numbers and a result, and returns the first pair of numbers that add up to the
 * result
 * @param numbers - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @param result - the sum of the two values that will be returned
 * @returns An array of two numbers that add up to the result.
 */
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