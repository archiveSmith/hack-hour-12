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
  const pscalTriangle = [];

  if (numRows === 0) return pscalTriangle;

  pscalTriangle.push([1]);
  if (numRows === 1) return pscalTriangle;
  
  numRows -= 1;
  while (numRows--) {
    const newRow = [1];
    const prevRow = pscalTriangle[pscalTriangle.length - 1];
    for (var i = 0; i < prevRow.length - 1; i++) {
      newRow.push(prevRow[i] + prevRow[i + 1]);
    }
    newRow.push(1);
    pscalTriangle.push(newRow)
  }
  return pscalTriangle;
}
console.log(pascalTriangle(5));
module.exports = pascalTriangle;
