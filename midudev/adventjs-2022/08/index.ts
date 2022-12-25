/**
 * For each character in the string, remove it and check if the remaining string is a palindrome.
 * @param {string} part - string =&gt; the string to check
 * @returns A boolean value.
 */
export default function checkPart(part: string) {
  return [...part].some((_, i) => {
    const word: string = part.substring(0, i) + part.substring(i + 1);
    return word === [...word].reverse().join("");
  });
}
