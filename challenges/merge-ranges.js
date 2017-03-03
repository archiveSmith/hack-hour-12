/**
 * Write a function mergeRanges that takes an array of meeting time 
 * ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  if (!array) return;
  if (array.length <= 1) return array;

  const output = [];
  const sorted = array.sort((a,b) => a[0] - b[0]);
  let prev = sorted[0];
  sorted.forEach((el) => {
    // check for overlap of ranges
    if (el[0] >= prev[0] && el[0] <= prev[1]) {
      const newRange = [Math.min(prev[0], el[0]), Math.max(prev[1], el[1])];
      if (output.length > 0) output.pop();
      output.push(newRange);
    } else {
      output.push(el);
    }
    prev = el;
  });
  return output;
}

module.exports = mergeRanges;
