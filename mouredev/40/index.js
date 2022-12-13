function AddRow(row) {
  let newRow = [1]
  row.forEach((item, index, array) => {
    const next = row[index + 1]
    if (index < array.length - 1) newRow.push(item + next)
  });
  newRow.push(1)
  return newRow
}

function GenerateTriangle(height) {
  let triangle = [[1], [1, 1]]
  switch (height) {
    case 0:
      return [[]]
    case 1:
      return [[1]]
    case 2:
      return triangle
    default :
      Array.from(Array(height)).forEach(() => {
        triangle.push(AddRow(triangle[triangle.length - 1]));
      })
      return triangle
  }
}


console.log('*******************');
GenerateTriangle(0).forEach((item) => {
  console.log(item);
})

console.log('*******************');
GenerateTriangle(1).forEach((item) => {
  console.log(item);
})

console.log('*******************');
GenerateTriangle(2).forEach((item) => {
  console.log(item);
})

console.log('*******************');
GenerateTriangle(4).forEach((item) => {
  console.log(item);
})