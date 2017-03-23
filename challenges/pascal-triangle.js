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
  for (let i = 1; i <= numRows; i++) {
    const tmp = [];
    for (let j = 1; j <= i; j++) {
      if (result.length >= 2) {
        if (j === 1 || j === i) {
          tmp.push(1);
        } else {
          const sum = result[i-2][j-2] + result[i-2][j-1]
          tmp.push(sum);
        }
      } else {
        tmp.push(1);
      }
    }
    result.push(tmp);
  }
  return result;
}

// console.log(pascalTriangle(6))

module.exports = pascalTriangle;
