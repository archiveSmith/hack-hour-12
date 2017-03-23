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
  let start = [[1]];

  if (numRows === 0) return [];
  if (numRows === 1) return start;

  for (let row = 1; row <= numRows; row += 1) {
    let next = start[row - 1].reduce((acc, cv, index, arr) => {
      if (index === 0) acc.push(cv);
      if (arr[index + 1] !== undefined) acc.push(cv + arr[index + 1]);
      if (arr.length - index === 1) acc.push(1);
      return acc;
    }, [])

    start.push(next);
  }

  return start;
}

console.log(pascalTriangle(5))

module.exports = pascalTriangle;
