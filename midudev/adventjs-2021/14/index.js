function _missingReindeer(ids) {
  ids = ids.sort();
  let num = -1;
  for (let i = 0; i < ids.length; i++) {
    if (ids[i] === num + 1) {
      num += 1;
      continue;
    }

    num += 1;
    break;
  }
  return num === ids[ids.length - 1] ? num + 1 : num;
}

function missingReindeer(ids) {
  const unpaired = ids.sort().find((id, index) => id !== index)
  return unpaired ? unpaired - 1 : ids.length
}

// console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0]));
