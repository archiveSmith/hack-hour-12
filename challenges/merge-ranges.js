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
  // check if valid input
  if (!Array.isArray(array)) return;

  // store ranges of meeting times
  const ranges = [];

  // iterate through each meeting time range
  for (let i = 0; i < array.length; i++) {
    let modified = false;
    for (let j = 0; j < ranges.length; j++) {
      // first element is between a range
      if (array[i][0] >= ranges[j][0] && array[i][0] <= ranges[j][1]) {
        // do nothing with 1st element
        modified = true;
        if (array[i][1] > ranges[j][1]) {
          ranges[j][1] = array[i][1];
        }
      }

      // second element is between a range
      if (array[i][1] >= ranges[j][0] && array[i][1] <= ranges[j][1]) {
        modified = true;
        ranges[j][0] = array[i][0];
      }

    }

    if (!modified) {
      ranges.push(array[i]);
    }
  }

  return ranges;
}

console.log(mergeRanges([[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]));

module.exports = mergeRanges;
