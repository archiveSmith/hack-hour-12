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
  // create data set of lines by recording a single coordinate and two end points stored as max/min
  // Using an object literal will keep track of matching x coordinates

  const generateLines = (baseCoordinates, endPoints) => {
    return baseCoordinates.reduce((results, coordinate, i) => {
    // if the key does not exist, use coresponding end point for both min and max⁄
      if (!results[coordinate]) results[coordinate] = { max: endPoints[i], min: endPoints[i]};
      results[coordinate].max = Math.max(results[coordinate].max, endPoints[i]);
      results[coordinate].min = Math.min(results[coordinate].min, endPoints[i]);
      return results;
    }, {});
  }

  // do the same for y lines...
  // create data of horizontal lines by recording a single y-coordinate and two end points stored as max/min
  const xLines = generateLines(x, y);
  const yLines = generateLines(y, x);

  // Count # of intersections
  let intersections = 0;

  // Nested for loops to do all comparisons
  for (let xCoord in xLines) {
    for (let yCoord in yLines) {
      if (
        xLines[xCoord].max > yCoord &&
        yCoord > xLines[xCoord].min &&
        yLines[yCoord].max > xCoord &&
        xCoord > yLines[yCoord].min
      )
      intersections++;
    }
  }

  return intersections;
}

const x = [-1, -1, 2, 2, 3, 4];
const y = [2, -1, 1, 3, -2, 2];

console.log(newIntersections(x, y));
