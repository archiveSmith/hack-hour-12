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
  // handle invalid inputs
    if (!numRows || numRows < 1) return [];

    // there is at least one row - let's add it
    var triangle = [[1]];
    var row;

    // 'j' will be the index of the PREVIOUS row in the triangle
    for (var j = 0; j < numRows-1; j++) {
      // row will be our CURRENT row, and all rows begin with a 1
      row = [1];

      // 'k' will be the index of each element in a given row
      // start from k = 1 because the index 0 is already added
      // we iterate until we are where the previous row ends.
      // on each iteration we add two values from the previous row
      for (var k = 1; k < triangle[j].length; k++) {
        row[k] = triangle[j][k] + triangle[j][k-1];
      }
      // push the trailing 1 to complete the row
      row.push(1);
      triangle.push(row);
    }

    return triangle;
}

console.log(pascalTriangle(5000));

module.exports = pascalTriangle;
