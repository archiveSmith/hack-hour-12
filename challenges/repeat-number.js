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
  // check if valid input
  if (!Array.isArray(array)) return;

  // sort array in ascending order
  array.sort((a, b) => a - b);

  // check if previous value is equal to current value
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) return array[i];
  }

  // return undefined if no repeating numbers
  return;
}
console.log(repeatNumbers([1,4,3,9,10,2,6,7,3,8]));
module.exports = repeatNumbers;
