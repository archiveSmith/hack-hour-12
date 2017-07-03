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
    const newRow = [1];

    for (let j = 1; j < i; j += 1) {
      const prevRow = triangle[triangle.length - 1];
      const sum = prevRow[j] + prevRow[j - 1];
      newRow.push(sum);
    }

    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle;
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
