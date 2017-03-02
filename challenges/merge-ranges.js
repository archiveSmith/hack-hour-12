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
  copyArr = array.slice();
  copyArr.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < copyArr.length; i += 1) {
    if (copyArr[i][0] <= copyArr[i - 1][1]) {
      copyArr[i - 1][1] = copyArr[i][1];
      copyArr.splice(i,1);
    }
  }
  return copyArr;
}

module.exports = mergeRanges;
