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
  var newGrid = [];

  for (var i = 0; i < grid.length; i++) {
    //convert to x/y
    var x = i % n;
    var y = Math.floor(i / n);

    //find new x/y
    var newX = n - y - 1;
    var newY = x;

    //convert back to index
    var newPosition = newY * n + newX;
    newGrid[newPosition] = grid[i];
  }
  return newGrid;
}

module.exports = rotateGrid;
