export default function checkPart(part: string) {
  return [...part].some((_, i) => {
    const word: string = part.substring(0, i) + part.substring(i + 1);
    return word === [...word].reverse().join("");
  });
}
