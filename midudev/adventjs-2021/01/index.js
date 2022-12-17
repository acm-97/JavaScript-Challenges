/**
 * It filters the array of objects by the name property, and returns the objects that have the letters
 * 'n' and 'a' in the name, and the color property is 'rojo'
 * @param {{name: string; colo: string}[]} ovejas
 * @returns {boolean} The sheeps that have the letter n and a in their name and are red.
 */
export default function countSheeps(ovejas) {
  ovejas = ovejas.filter(({ name, color }) => {
    name = name.toLowerCase();
    return name.includes("n") && name.includes("a") && color === "rojo";
  });
  return ovejas;
}
