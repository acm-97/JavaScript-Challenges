/**
 * It converts the time strings to seconds, finds the greatest common divisor of the two numbers, and
 * then divides both numbers by the greatest common divisor
 * @param {string} part - "00:00:00"
 * @param {string} total - "00:00:00"
 * @returns A string in the form of "a/b" where a and b are integers.
 */
export default function getCompleted(part: string, total: string) {
  const convertToSeconds = (raw: string): number =>
    raw.split(":").reduce((acc, value) => acc * 60 + Number(value), 0);

  const partInSeconds = convertToSeconds(part);
  const totalInSeconds = convertToSeconds(total);

  // Greatest Common Divisor
  let gcd1 = totalInSeconds;
  let gcd2 = partInSeconds;
  while (gcd2) {
    const tmp = gcd1 % gcd2;
    gcd1 = gcd2;
    gcd2 = tmp;
  }

  return `${partInSeconds / gcd1}/${totalInSeconds / gcd1}`;
}
