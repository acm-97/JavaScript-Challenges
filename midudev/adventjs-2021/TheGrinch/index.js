export default function isValid(letter) {
  const indexOpen = letter.indexOf('(')
  const lastIndexOpen = letter.lastIndexOf('(')
  const lastIndexClose = letter.lastIndexOf(')')
  const arrInvalid = ["[", "]", "{", "}", "()", "(", ")"]

  if(indexOpen > lastIndexClose || lastIndexOpen > lastIndexClose)
    return false
  
  const newLetter = letter.slice(indexOpen + 1, lastIndexClose)
  return newLetter.length > 0 &&  !arrInvalid.some(val => newLetter.includes(val)) 
}