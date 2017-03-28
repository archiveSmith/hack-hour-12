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
// if input is not integer or integer is less than 1, inform user
// build triangle starting with first row completed
// for loop from 1 to numRows (exclusive) incrementing by 1
// all rows start with 1
// loop from j = 1 to i (exclusive) incrementing by 1
// need access to previous row for element lookups
// apply pascal logic to add values from previous row at same index and index - 1
// push sum to current row
// all rows end with a 1
// when finished making current row, push to triangle
// return triangle after all rows added
}

module.exports = pascalTriangle;
