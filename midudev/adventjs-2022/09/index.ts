export default function countTime(leds: number[]) {
  
  const ledsOffStrips = leds
    .join("")
    .split("1")
    .map((strip) => strip.length);
  
  // Join first & last strips in a unique strip (circular strip)
  // @ts-ignore
  ledsOffStrips[0] += ledsOffStrips.pop();
  
  console.log(ledsOffStrips);

  return Math.max(...ledsOffStrips) * 7;
}
