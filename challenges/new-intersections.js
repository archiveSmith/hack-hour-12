/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  let counter = 0;
  let length = x.length;

  for(let i = 0; i < length; i++) {
    let currentX = x[i];
    let currentY = y[i];
    // testing every old left coordinate
    let top = false;
    let right = false;
    let bottom = false;
    for(let j = 0; j < length; j++) {
      if(i !== j) {
        if(currentX + 1 === x[j] && currentY - 1 === y[j]) bottom = true;
        if(currentX + 1 === x[j] && currentY + 1 === y[j]) top = true;
        if(currentX + 2 === x[j] && currentY + 0 === y[j]) right = true;
      }
    }
    if(top && right && bottom) {
      counter++;
    }
  }
  return counter;
}

module.exports = newIntersections;
