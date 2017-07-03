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
  // create data of vertical lines by recording a single x-coordinate and two end points stored as max/min
  // Using an object literal will keep track of matching x coordinates

    // if the key does not exist, its coores


  // do the same for y lines...
  // create data of horizontal lines by recording a single y-coordinate and two end points stored as max/min


  const generateLines = (baseCoordinates, endPoints) => {
    return baseCoordinates.reduce((results, coordinate, i) => {
      if (!results[coordinate]) results[coordinate] = { max: endPoints[i], min: endPoints[i] };
      results[coordinate].max = Math.max(results[coordinate].max, endPoints[i]);
      results[coordinate].min = Math.min(results[coordinate].min, endPoints[i]);
      return results;
    }, {});
  };

  const xLines = generateLines(x, y);
  const yLines = generateLines(y, x);

  // Count # of intersections
  let intersections = 0;

  // Nested for loops to do all comparisons
  for (let xCoord in xLines) {
    for (let yCoord in yLines) {
      if (
        // check if y is below x-line's max
        xLines[xCoord].max > yCoord &&
        // check if y is above x-line's min
        yCoord > xLines[xCoord].min &&
        // check if x is below y-line's max
        yLines[yCoord].max > xCoord &&
        // check if x is above y-line's min
        xCoord > yLines[yCoord].min
      )
        intersections++;
    }
  }
  return intersections;
}

// check
function newIntersectionsF(x, y) {
  // use obj to count number of instances of each value
  function findPairs(arr) {
    const pairsObj = {};

    // count instances
    for (let i = 0; i < arr.length; i += 1) {
      let val = pairsObj[arr[i]];
      pairsObj[arr[i]] = val ? val + 1 : 1;
    }

    // if odd, reduce to even
    for (let key in pairsObj) {
      if (pairsObj[key] % 2 !== 0) pairsObj[key] = pairsObj[key] - 1;
    }

    // get values in obj
    const valArr = Object.keys(pairsObj).map(key => pairsObj[key]);

    // return number of pairs
    return valArr.reduce((a, b) => a + b) / 2;
  }

  const xPairs = findPairs(x) ? findPairs(x) : 0;
  const yPairs = findPairs(y) ? findPairs(y) : 0;

  return Math.min(xPairs, yPairs);
}

var x = [-1, -1, 2, 2, 3, 4];
var y = [2, -1, 1, 3, -2, 2];

console.log(newIntersections(x, y));

module.exports = newIntersections;
