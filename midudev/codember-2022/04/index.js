/**
 * It returns true if the array contains at least two 5's and every element is greater than or equal to
 * the previous element.
 * @param arr - an array of integers
 */
function isValid(arr) {
  let pivot = 0;
  let count5 = arr.filter(val => val === '5').length
  return arr.every((val) => {
    
    const flag = count5 >= 2 && val >= pivot;
     
    pivot = +val;
    return flag;
  });
}

/**
 * It loops through all the numbers between 11098 and 98123, and if the number is valid, it adds it to
 * an array.
 * @returns {count: 5, pos55: "11153"}
 */
function findPass() {
  let min = 11098;
  const max = 98123;
  let arr = [];

  while (min < max) {
    min++;
    if (isValid(min.toString().split(''))) {
      arr.push(min + "");
    }
  }

  return {count: arr.length, pos55: arr[55]};
}

console.log(findPass());
