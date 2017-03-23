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
  if (!numRows) return [];
  const output = [];
  let curr;
  let prev;
  let num;
  
  for (let i = 0; i < numRows; i += 1) {
    curr = [];
    for (let j = 0; j <= i; j += 1) {
      if ( j === 0 || j === i) curr.push(1);
      else curr.push(prev[j -1] + prev[j]);
    }
    prev = curr;
    output.push(curr);
  }
  console.log(output);
  return output;
}

pascalTriangle(10);
module.exports = pascalTriangle;
