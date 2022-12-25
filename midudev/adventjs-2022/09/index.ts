/**
 * Join all the leds in a single string, split the string in an array of strings, each string
 * representing a strip of leds, then map the array of strings to an array of numbers, each number
 * representing the length of the strip, then join the first and last strips in a unique strip
 * (circular strip), then return the maximum value of the array of numbers multiplied by 7.
 * @param {number[]} leds - an array of integers representing the current state of the lights. 1 means
 * on, 0 means off.
 * @returns The longest strip of leds off multiplied by 7.
 */
export default function countTime(leds: number[]) {
  
  const ledsOffStrips = leds
    .join("")
    .split("1")
    .map((strip) => strip.length);
  
  // Join first & last strips in a unique strip (circular strip)
  // @ts-ignore
  ledsOffStrips[0] += ledsOffStrips.pop();
  
  return Math.max(...ledsOffStrips) * 7;
}
