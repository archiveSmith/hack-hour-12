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
  const result = [];

  // if less than 5, 11^numRow
  if (numRows < 5) {
    for (let i = 0; i < 5; i++) {
      const row = Math.pow(11, i).toString().split('');
      result.push(row);
    }
  }

  return result;
}
console.log(pascalTriangle(4));
module.exports = pascalTriangle;
