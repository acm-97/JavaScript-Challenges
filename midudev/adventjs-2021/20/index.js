/**
 * It takes a string, converts it to lowercase, replaces all accented characters with their
 * non-accented counterparts, and then checks if the resulting string contains all the letters of the alphabet
 * @param {string} letter - The string to check.
 * @returns {boolean} A boolean value.
 */
export default function pangram(letter) {
  letter = letter
    .toLowerCase()
    .replace(/[áä]/g, "a")
    .replace(/[éë]/g, "e")
    .replace(/[íï]/g, "i")
    .replace(/[óö]/g, "o")
    .replace(/[úü]/g, "u");

  return "abcdefghijklmnñopqrstuvwxyz"
    .split("")
    .every((char) => letter.includes(char));
}
