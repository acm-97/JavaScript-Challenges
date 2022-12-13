/**
 * If there are no parenthesis, the letter is valid. If there are parenthesis, the letter is valid if
 * and only if each gift is surrounded by parenthesis and does not contain any parenthesis, curly
 * braces, or square brackets
 * @param letter - a string containing the letter to be validated
 */
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