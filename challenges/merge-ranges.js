/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  let meetings = [];
  for (let i = 0; i < array.length; i++) {
    const start = array[i][0];
    const end = array[i][1];
    for (let j = i+1; j < array.length; i++) {
      const startTest = array[j][0];
      const endTest = array[j][1];
      if (end > startTest) {

      }
    }   
  }
}

module.exports = mergeRanges;
