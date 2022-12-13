export default function isValid(letter) {
  const gifts = letter.match(/\((.*?)(\)|$)/gm)
 
   if (gifts === null) return true // No parenthesis is allowed
 
   const invalidGift = gifts.find(gift => {
     return (
       gift.length === 2 ||
       gift.slice(-1) !== ')' ||
       gift.slice(1, -1).match(/[(){}[\]]/)
     )
   })
 
   return invalidGift === undefined 
 }