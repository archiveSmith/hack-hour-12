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
  const checked = {};
  for (let i = 0; i < array.length; i += 1) {
    if (checked[array[i]]) return array[i];
    checked[array[i]] = 1;
  }
  return 'Invalid input array';
}

function repeatNumbersOptimal(array) {
  const expected = ((array.length - 1) * array.length) / 2;
  let action = 0;

  for (let i = 0; i < array.length; i += 1) {
    actual += array[i];
  }
  return actual - expected;
}

module.exports = repeatNumbers;
