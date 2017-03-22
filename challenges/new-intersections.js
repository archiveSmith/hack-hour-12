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

function newIntersections(x, y, ithX = 0, checked = {}, count = 0) {
  if (ithX === x.length) return count;
  let currCheck = x[ithX];
  // find min y and max y for given x value
  if (checked[currCheck]) return newIntersections(x, y, ithX += 1, checked, count);

  let minY = x.reduce((acc, cv, index) => {
    if (cv === currCheck) {
      if (y[index] < acc) acc = y[index]
    };

    return acc;
  }, y[ithX]);

  let maxY = x.reduce((acc, cv, index) => {
    if (cv === currCheck) {
      if (y[index] > acc) acc = y[index]
    };

    return acc;
  }, y[ithX]);

  let correspondingXValues = [];
  let yValuesInRange = y.reduce((acc, cv, index) => {
    if (cv < maxY && cv > minY) {
      acc.push(cv);
      correspondingXValues.push(x[index]);
    }
    
    return acc;
  }, []);

  for (let j = 0; j < yValuesInRange.length; j += 1) {
    const curr = yValuesInRange[j];
    for (let k = j + 1; k < yValuesInRange.length; k += 1) {
      if (curr === yValuesInRange[k]) {
        if (correspondingXValues[j] < currCheck && correspondingXValues[k] > currCheck) count += 1;
        else if (correspondingXValues[j] > currCheck && correspondingXValues[k] < currCheck) count += 1;
      }
    }
  }

  checked[currCheck] = true;

  return newIntersections(x, y, ithX += 1, checked, count);
  
}

console.log(newIntersections([1,2,0,1], [0,2,2,4]));

module.exports = newIntersections;
