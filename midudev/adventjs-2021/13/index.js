export default function wrapGifts(gifts) {
  if (gifts.length === 0) return gifts;

  const startEnd = '*'.repeat(gifts[0].length + 2)
  const arr = gifts.map(emojis => `*${emojis}*`)
  return [startEnd,  ...arr, startEnd]
}

// console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
