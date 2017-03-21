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
  let horizontals = {};
  let verticals = {};
  for (var i = 0; i < x.length; i++) {
    for (var j = i + 1; j < y.length; j++) {
      if (x[i] === x[j]) {
        [smaller, bigger] = y[i] > y[j] ? [y[j], y[i]] : [y[i], y[j]];
        if (!horizontals[x[i]]) {
          horizontals[x[i]] = [smaller, bigger];
        } else {
           if (smaller < horizontals[x[i]][0]) horizontals[x[i]].splice(0, 1, smaller);
           if (bigger > horizontals[x[i]][1]) horizontals[x[i]].splice(1, 1, bigger);
        }
      }
      if (y[i] === y[j]) {
        [smaller, bigger] = x[i] > x[j] ? [x[j], x[i]] : [x[i], x[j]];
        if (!verticals[y[i]]) {
          verticals[y[i]] = [smaller, bigger];
        } else {
          if (smaller < verticals[x[i]][0]) verticals[x[i]].splice(0, 1, smaller);
          if (bigger > verticals[x[i]][1]) verticals[x[i]].splice(1, 1, bigger);
        }
      }
    }
  }
  let count = 0;
  for (var i in horizontals) {
    for (var j in verticals) {
      count += i < verticals[j][1] && i > verticals[j][0] && j < horizontals[i][1] && j > horizontals[i][0];
    }
  }
  return count;
}

console.log(newIntersections([1, 4, 4, 6], [4, 6, 1, 4]));

module.exports = newIntersections;
