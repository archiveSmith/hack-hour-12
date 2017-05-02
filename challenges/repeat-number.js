/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let repeat = 0;
  array.reduce((a, b) => {
    if (!a[b]) a[b] = true;
    else repeat = b;
    return a;
  }, {});
  return repeat;
}


module.exports = repeatNumbers;
