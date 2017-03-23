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
  let intersections = 0;
  const Xs = x.reduce((acc, xCoord, i) => {
    if (!acc[xCoord]) acc[xCoord] = { min: Math.min(), max: Math.max() };
    return acc;
  }, {});
  const Ys = y.reduce((acc, yCoord, i) => {
    if (!acc[yCoord]) acc[yCoord] = { min: Math.min(), max: Math.max() };
    return acc;
  }, {});

  for (let x in Xs) {
    for (let y in Ys) {
      if (true) intersections += 1;
    }
  }

  return intersections;
}

module.exports = newIntersections;
