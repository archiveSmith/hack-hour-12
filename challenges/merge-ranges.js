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
  if(!array || !Array.isArray(array)) return 'Check Inputs';

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (i === j) continue;
      else if (array[j][0] >= array[i][0] && array[j][0] <= array[i][1]) {
        array.push(array[i][1] >= array[j][1] ? [array[i][0], array[i][1]] : [array[i][0],array[j][1]]);
        i > j ? (array.splice(i, 1), array.splice(j,1)) : (array.splice(j, 1), array.splice(i, 1));
        i = j = 0;
      }
    } 
  } return array;
}

module.exports = mergeRanges;
