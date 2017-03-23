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
  const resultArr = [];

  for (let i = 1; i <= numRows; i += 1) {
    resultArr.push((new Array(i)).fill(1));
  }

  const resultArrCopy = resultArr.slice();

  resultArrCopy.forEach((e, i) => {
    for (let j = 1; j < e.length - 1; j += 1) {
      e[j] = resultArr[i - 1][j - 1] + resultArr[i - 1][j];
    }
  });

  return resultArr;
}

module.exports = pascalTriangle;
