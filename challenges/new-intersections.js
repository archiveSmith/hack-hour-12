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
  function findPairs(arr) {
    const pairsObj = {};
    for (let i = 0; i < arr.length; i += 1) {
      let val = pairsObj[arr[i]];
      if (!val) {
        pairsObj[arr[i]] = 1;
      } else {
        pairsObj[arr[i]] = val + 1;
      }
    }
    for (let key in pairsObj) {
      if (pairsObj[key] % 2 !== 0) pairsObj[key] = pairsObj[key] - 1;
    }
    const valArr = Object.keys(pairsObj).map((key) => pairsObj[key]);
    return valArr.reduce((a, b) => a + b) / 2;
  }

  const xPairs = findPairs(x);
  const yPairs = findPairs(y);

  return Math.min(xPairs, yPairs);
}

// var x = [-1, -1, 2, 2, 3, 4];
// var y = [2, -1, 1, 3, -2, 2];

// console.log(newIntersections(x, y));

module.exports = newIntersections;
