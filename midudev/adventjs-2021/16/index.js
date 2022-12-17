/**
 * It takes a string of symbols and returns the number they represent.
 * @param {string} symbols - a string of symbols that represent a number
 * @returns {number} The sum of the values of the symbols.
 */
export default function decodeNumber(symbols) {
  const decodeObj = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  symbols = symbols.split("");
  return symbols.reduce((acc, cur, i, arr) => {
    const value = decodeObj[cur] || NaN;
    const nextValue = decodeObj[arr[i + 1]];
    if (value < nextValue) return acc - value;
    return acc + value;
  }, 0);
}
