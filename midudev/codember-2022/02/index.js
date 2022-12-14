  let message =
  "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";

/**
 * The function takes a string of numbers and converts it to a string of letters.
 * @param str - The string to decode
 * @returns "thesentence"
 */
const asciiToSentence = (str) => {
  let num = 0;
  let strDecoded = "";
  for (var i = 0; i < str.length; i++) {
    // Append the current digit
    num = num * 10 + +str[i];
    // If num is within the required range
    if (num >= 97 && num <= 122) {
      // Convert num to char
      strDecoded += String.fromCharCode(num);

      // Reset num to 0
      num = 0;
    }
  }
  return strDecoded;
};

/**
 * It takes a string of numbers separated by spaces, converts each number to a character, and returns
 * the result
 * @param [code] - The code to be decrypted.
 * @returns The decrypted code.
 */
export default function decryptedCode(code = message) {
  return code
    .split(" ")
    .map((val) => asciiToSentence(val))
    .join(" ");
}

console.log(decryptedCode());
