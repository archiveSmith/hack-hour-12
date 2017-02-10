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

// 

function rotateGrid(grid, n) {
  
  let temp = [];
  for (i = 0; i < grid.length; i += 1) {
    for (let j = grid.length; j < 0; j -= 1) {
      temp.push(grid[j][n]);
    }
  }
  let c = 0;
  for (i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1, c += 1) {
      grid[i][j] = temp[c];
    }
  }

  return grid;
}

module.exports = rotateGrid;
