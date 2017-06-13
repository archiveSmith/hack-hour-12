'use strict';

/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  if (array.length === 1) return array[0] === target;
  const arrLen = array.length;
  let sum;

  for (let i = 0; i < arrLen; i++) {
    sum = array[i];
    if (sum === target) return true;

    for (let j = 0; j < arrLen; j++) {
      if (i !== j) sum += array[j];
      if (sum === target) return true;
    }

    for (let k = 0; k < arrLen; k++) {
      if (k !== i) sum -= array[k];
      if (sum === target) return true;
    }
  }

  return false;
}

module.exports = subsetSum;
