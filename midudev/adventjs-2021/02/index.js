/**
 * It takes a string, splits it into an array, filters out empty strings and strings that start with an
 * underscore, then reduces the array into an object where the keys are the words and the values are
 * the number of times that word appears in the string.
 * @param {string} letter - a string of words separated by spaces (no punctuation)
 * @returns {{bici: number; coche: number; balón: number; peluche: number}} An object with the word as the key and the number of times it appears as the value.
 */
export default function listGifts(letter) {
  const letterArr = letter
    .split(" ")
    .filter((val) => !!val && !val.startsWith("_"))
    .reduce((acc, cur) => {
      if (acc[cur]) {
        return { ...acc, [cur]: acc[cur] + 1 };
      }

      return { ...acc, [cur]: 1 };
    }, {});

  return letterArr;
}
