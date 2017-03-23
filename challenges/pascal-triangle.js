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
  if (typeof numRows !== 'number') return;
  output = [];
  //each level is the length of the row;
  //on each level the first and last elements are 1's
  //inner elements are the addition of 
  for (let i = 0; i < numRows; i++) {
    output.push([])
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) output[i].push(1);
      else output[i].push(output[i-1][j-1] + output[i-1][j])
    }
  }
  return output;
}
//console.log(pascalTriangle(6));

module.exports = pascalTriangle;
