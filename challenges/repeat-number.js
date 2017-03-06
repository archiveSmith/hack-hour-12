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

function MMMrepeatNumbers(array) {
  const storage = {};
  for (let i = 0; i < array.length; i++) {
    if (storage.hasOwnProperty(array[i])) {
      return array[i];
    }
    storage[array[i]] = array[i];
  }
  return;
}

// O(n) time, O(1) space
function repeatNumbers(array) {
  const expected = ((array.length - 1) * array.length) / 2;
  let actual = 0;

  for (let i = 0; i < array.length; i++) {
    actual += array[i];
  }
  return actual - expected;
}

module.exports = repeatNumbers;
