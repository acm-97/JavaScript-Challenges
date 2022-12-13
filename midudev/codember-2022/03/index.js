import { colors } from "./colors.js";

/**
 * It takes an array of colors and returns the length of the longest strip of colors and the last color
 * in that strip
 * @param arr - an array of strings representing colors
 * @returns The length of the longest strip of colors and the last color in the strip.
 */
export default function CalculateColorStrip(arr) {
  let strip = [];
  let lastColor = "";
  let maxLength = 0;
  
  arr.forEach((currColor, i) => {
    const nextColor = arr[i + 1];
    const prevColor = arr[i - 1];
    
    
    if ( currColor === prevColor) {
      strip = [currColor];
      return;
    }

    if (( strip.length > 1 && !strip.includes(currColor)) || (typeof nextColor === undefined && strip.length <= 2)) {
      strip = [prevColor, currColor];

      if (strip.length >= maxLength) {
        maxLength = strip.length;
        lastColor = strip[strip.length - 1];
      }
      return;
    }

    if (prevColor !== currColor || strip.length < 2) {
      strip.push(currColor);

      if (strip.length >= maxLength) {
        maxLength = strip.length;
        lastColor = strip[strip.length - 1];
      }
    }
  });
  // return a;
  return `${maxLength}, ${lastColor}`;
}

console.log(CalculateColorStrip(colors));
