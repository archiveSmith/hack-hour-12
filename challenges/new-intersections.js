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

function newIntersections(x, y) {
  const len = x.length;
  const hor = [];
  const vert = [];
  let newCount = 0;
  for (let i = 0; i < len - 1; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (x[i] === x[j]) vert.push([[x[i], y[i]], x[j], y[j]]);
      if (y[i] === y[j]) hor.push([[x[i], y[i]], x[j], y[j]]);
    }
  }
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      // if hor x Values include vert xVal && vert y Values include hor yVal
      if ((Math.min(hor[i][0][0], hor[i][1][0]) <= vert[j][0][0] && Math.max(hor[i][0][0], hor[i][1][0]) >= vert[j][0][0])
        && (Math.min(vert[i][0][1], vert[i][1][1]) <= hor[j][0][1] && Math.max(vert[i][0][1], vert[i][1][1]) >= hor[j][0][1])) {
          newCount += 1;
        }
    }
  }
  return newCount;
}

module.exports = newIntersections;
