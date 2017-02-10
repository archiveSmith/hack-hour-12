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

function rotateGrid(grid, n, i = 0) {
    //probably have to do it recursively starting from outside or a while loop while holding on to starting index.
    //0, n. 1, n-1. 2, n-2. so on.
    //base case would be testing if i and n-i are equal or if i >= n
    n--;
    if (i >= n) return;
    //rotate corners first as they behave differently, insides have same logic for all
    let temp = grid[i][n];
    grid[i][n] = grid[i][i];
    grid[i][i] = grid[n][i];
    grid[n][i] = grid[n][n];
    grid[n][n] = temp;
    //rotate insides one at a time starting at i + 1
    for (var j = i + 1; j < n; j++) {
        let temp = grid[i][j];
        grid[i][j] = grid[n-j][i];
        grid[n-j][i] = grid[n][n-j];
        grid[n][n-j] = grid[j][n];
        grid[j][n] = temp;
        
    }

    rotateGrid(grid, n, ++i);
    return grid;
}
console.log(rotateGrid([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]],4,0));
module.exports = rotateGrid;
