function ConvertToDecimal(array) {
  let result = 0;
  let index = array.length - 1;
  let exponente = 0;

  while (index > -1) {
    result += array[index] * Math.pow(2, exponente)
    index--
    exponente++
  }
 return result;
}

const decimalToBinary = (num) => {

  let result = [];

  while (num > 0){ 
    result.unshift(num % 2); 
    num = Math.floor(num / 2); 
  }
  return result.join('');
}


const array = [1, 1, 1, 0, 0,1]
console.log(ConvertToDecimal(array));

console.log(decimalToBinary(57));

console.log((57).toString(2));