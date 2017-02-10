/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */


function rotateGrid(grid, n) {
  if (!grid) return;
  let output = [];
  let row = [];

  for (let i = 0; i < n; i += 1) {
    for (let j = n - 1; j >= 0; j -= 1) {
      row.push(grid[j][i]);
    }
    output.push(row);
    row = [];
  }
  return output;
}

// let grid = [
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,10,11,12],
//   [13,14,15,16],
// ];
// console.log(rotateGrid(grid, 4));

module.exports = rotateGrid;
