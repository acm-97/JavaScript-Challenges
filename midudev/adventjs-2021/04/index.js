export default function createXmasTree(height) {
  let asteriskRepeat = 1
  let spaceRepeat = height - 1
  let spaceTrunkRepeat = height - 1
  let str = ''

  while(spaceRepeat >= 0) {
    str += "_".repeat(spaceRepeat) + '*'.repeat(asteriskRepeat) + "_".repeat(spaceRepeat) + '\n'
    asteriskRepeat += 2
    spaceRepeat--
  }

  const trunk = "_".repeat(spaceTrunkRepeat) + "#" + "_".repeat(spaceTrunkRepeat)
  return str + trunk + '\n' + trunk
}