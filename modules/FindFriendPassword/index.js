function isValid(arr) {
  let pivot = 0;
  let count5 = arr.filter(val => val === '5').length
  return arr.every((val) => {
    
    const flag = count5 >= 2 && val >= pivot;
     
    pivot = +val;
    return flag;
  });
}

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
