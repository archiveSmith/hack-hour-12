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

// O(n^2) time, O(1) space
function repeatNumbers1(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
}

// objext
// O(n) time, O(n) space
function repeatNumbers2(array) {
  const obj = {};

  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      return array[i];
    }
    obj[array[i]] = array[i];
  }
}

// sort
// O(n log n) time, O(1) space
 function repeatNumbers3(array) {
   array.sort((a, b) => a - b);

   for (let i = 0; i < array.length; i++) {
     if (array[i] === array[i + 1]) {
       return array[i];
     }
   }
 }

// compare sums
// O(n) time, O(1) space
function repeatNumbers4(array) {
  const expected = ((array.length - 1) * array.length) / 2;
  let actual = 0;

  for (let i = 0; i < array.length; i++) {
    actual += array[i];
  }
  return actual - expected;
}

module.exports = repeatNumbers;
