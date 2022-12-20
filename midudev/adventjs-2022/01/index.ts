export default function wrapping(gifts: string[]): string[] | [] {
  /* Returning the gifts array with the wrapping function applied to each element. */
  return gifts.map((value) => {
    const wrapper = "*".repeat(value.length + 2);
    return `${wrapper}\n*${value}*\n${wrapper}`;
  });
}
