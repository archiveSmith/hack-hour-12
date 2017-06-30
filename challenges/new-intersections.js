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
  // Get all vertical lines and their max/min
  const exes = x.reduce((accum, xCoord, index) => {
    if (!accum[xCoord]) accum[xCoord] = { max: y[index], min: y[index] };
    accum[xCoord].max = Math.max(accum[xCoord].max, y[index]);
    accum[xCoord].min = Math.min(accum[xCoord].min, y[index]);
    return accum;
  }, {});

  // Get all horizontal lines and their max/min
  const whys = y.reduce((accum, yCoord, index) => {
    if (!accum[yCoord]) accum[yCoord] = { max: x[index], min: x[index] };
    accum[yCoord].max = Math.max(accum[yCoord].max, x[index]);
    accum[yCoord].min = Math.min(accum[yCoord].min, x[index]);
    return accum;
  }, {});

  // Count # of intersections
  let intersections = 0;
  for (let xCoord in exes) {
    for (let yCoord in whys) {
      if (
        exes[xCoord].max > yCoord &&
        yCoord > exes[xCoord].min &&
        whys[yCoord].max > xCoord &&
        xCoord > whys[yCoord].min
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
