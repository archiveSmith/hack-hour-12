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

  // setup main result array and the initial row
  const triangle = [[1]];

  // iterate through each new row starting at the 2nd (index 1)
  for (let i = 1; i < numRows; i += 1) {
    // initialize the new row with the first value of "1"
    const newRow = [1];
    const prevRow = triangle[triangle.length - 1];

    // iterate through each new value, starting at the 2nd value (index "1")
    // we will only push1 less value then the current row index -> j < i
    // store prevRow as a const (the last row of triangle)
    // get the sum of the prev row [j - 1] and [j], push to new row
    // push 1 to new row
    // push new row to triangle
    for (let j = 1; j < prevRow.length; j += 1) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }
  return triangle;
}

function pascalTriangleRecurse(numRows, triangle = [[1]]) {
  if (!Number.isInteger(numRows) || numRows < 1) return 'error';

  if (numRows === 1) return triangle;

  const newRow = [1];
  const prevRow = triangle[triangle.length - 1];

  for (let j = 1; j < prevRow.length; j += 1) {
    newRow.push(prevRow[j - 1] + prevRow[j]);
  }

  newRow.push(1);
  triangle.push(newRow);

  return pascalTriangle(numRows - 1, triangle);
}

console.log(pascalTriangle(6));

module.exports = pascalTriangle;
