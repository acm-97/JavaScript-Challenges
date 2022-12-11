export default function listGifts(letter) {
  const letterArr = letter.split(" ")
   .filter(val => !!val && !val.startsWith("_"))
   .reduce((acc, cur) => {
     if(acc[cur]) {
      return {...acc, [cur]: acc[cur] + 1 }
     }
     
     return {...acc, [cur]: 1 }
   }, {})
  
  return letterArr
 }