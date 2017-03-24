/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  if (!Number.isInteger(numRows) || numRows < 1) return 'error';

  const triangle = [[1]];

  for (let i = 1; i < numRows; i += 1) {
    const currentRow = [1];

    for (let j = 1; j < i; j += 1) {
      const previousRow = triangle[triangle.length - 1];
      const sum = previousRow[j] + previousRow[j - 1];
      currentRow.push(sum);
    }

    currentRow.push(1);
    triangle.push(currentRow);
  }
  return triangle;
}

function pascalTriangleMess(numRows) {
  const output = [[1], [1, 1]];
  
  while (numRows > 1) {
    let prevRow = output[output.length - 1];
    let newRow = [1];

    for (let i = 0; i <= Math.ceil((prevRow.length - 1) / 2); i += 1) {
      let next = prevRow[i + 1] ? prevRow[i + 1] : 0;
      newRow.push(prevRow[i] + next);
    }
    console.log(newRow);
    for (let j = newRow.length % 2 === 0 ? newRow.length - 2 : newRow.length - 2; j >= 0; j -= 1) {
      newRow.push(newRow[j]);
    }
    output.push(newRow);
    numRows -= 1;
  }

  return output;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
