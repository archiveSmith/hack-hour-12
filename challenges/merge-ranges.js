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
  console.log(array);
  if (!array) return null;
  let answerArr = [array[0]];
  let i;
  let j;
  let changed;
  for (i = 1; i < array.length; i += 1) {
    changed = false;
    for (j = 0; j < answerArr.length; j += 1) {
      if (array[i][0] >= answerArr[j][0] && array[i][0] <= answerArr[j][1]) {
        if (array[i][1] >= answerArr[j][1]) {
          answerArr[j][1] = array[i][1];
          changed = true;
        }
      }
      else if (array[i][1] <= answerArr[j][1] && array[i][1] >= answerArr[j][0]) {
        if (array[i][0] <= answerArr[j][0]) {
          answerArr[j][0] = array[i][0];
          changed = true;
        }
      }
      else if (array[i][0] < answerArr[j][0] && array[i][1] > answerArr[j][1]) {
        answerArr[j][0] = array[i][0];
        answerArr[j][1] = array[i][1];
        changed = true;
      }
    }
    if (!changed) answerArr.push(array[i]);
  }
  return answerArr;
}

module.exports = mergeRanges;
