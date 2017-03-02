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
  // check for overlap
  let prev = sorted[0];
  sorted.forEach((el, i) => {
    if (el[0] >= prev[0] && el[0] <= prev[1]) {
      // console.log('need to merge ', el, ' with ', prev);
      const newRange = [Math.min(prev[0], el[0]), Math.max(prev[1], el[1])];
      // console.log('newrange: ', newRange, 'output: ', output);
      if (output.length > 0) output.pop();
      output.push(newRange);
    } else {
      output.push(el);
    }
    prev = el;
  })
  return output;
}

// const times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
// console.log(mergeRanges(times));

module.exports = mergeRanges;
