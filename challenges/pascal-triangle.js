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
  let results = [[1], [1, 1]];
  if(numRows === 1) return results[0];
  if(numRows === 2) return results;

  for(let i = numRows; i > 2; i--) {
    let temp = [];
    let last = results[results.length - 1];
    temp.push(1);
    for(let j = 0; j < last.length - 1; j++) {
      temp.push(last[j] + last[j+1]);
    }
    temp.push(1);
    results.push(temp);
  }
  return results;
}

module.exports = pascalTriangle;
