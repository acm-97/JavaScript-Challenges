export default function countSheeps(ovejas) {
  ovejas = ovejas.filter( ({name, color}) => {
    name = name.toLowerCase()
    return name.includes('n') && name.includes('a') && color === "rojo"
  })
  return ovejas
}