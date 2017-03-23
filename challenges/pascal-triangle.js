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
  let mem = {};

  //edge case
  if (numRows === 0) {
    mem[0] = []; 
    return mem[0];
  }

  if (numRows === 1) {
    mem[1] = [[1]];
    return mem[1];
  }

  if (numRows === 2) {
    mem[2] = [[1],[1,1]];
    return mem[2];
  }

  let nextRow = [1];
  let previousRow = pascalTriangle(numRows - 1)[pascalTriangle(numRows - 1).length - 1];

  for ( let i = 0; i < previousRow.length - 1; i++) {
    nextRow.push(previousRow[i] + previousRow[i+1])
  }

  nextRow.push(1);
  mem[numRows] = pascalTriangle(numRows - 1).concat([nextRow]);
  return mem[numRows];
  //
}

let result = pascalTriangle(6);
console.log(result);


module.exports = pascalTriangle;
