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


const mergeRanges = array => array.sort((a, b) => a[0] - b[0])
  .reduce((a, b) => {
    if (a.length >= 1) {
      if (a[a.length - 1][1] >= b[0]) {
        if (a[a.length - 1][1] <= b[1]) {
          a.push([a.pop()[0], b[1]]);
          return a;
        }
        return a;
      }
    }
    a.push(b);
    return a;
  }, []);

module.exports = mergeRanges;
