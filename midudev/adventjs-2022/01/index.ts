export default function wrapping(gifts: string[]): string[] | [] {
  return gifts.map((value) => {
    const wrapper = "*".repeat(value.length + 2);
    return `${wrapper}\n*${value}*\n${wrapper}`;
  });
}
