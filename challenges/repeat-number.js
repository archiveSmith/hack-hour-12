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

// function repeatNumbers(array) {
//   if (!array || !(array instanceof Array)) return 'bad input';
//
//   const obj = {};
//
//   for (let i = 0; i < array.length; i += 1) {
//     if (!obj[array[i]]) obj[array[i]] = true;
//     else return array[i];
//   }
// }

// function repeatNumbers(array) {
//   if (!array || !(array instanceof Array)) return 'bad input';
//
//   for (let i = 0; i < array.length; i += 1) {
//     if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) return array[i];
//   }
// }

function repeatNumbers(array) {
  if (!array || !(array instanceof Array)) return 'bad input';

  const expected = (array.length - 1) * ((array[array.length - 1] - 1) / 2);
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    result += array[i];
  }
  return result - expected;
}

module.exports = repeatNumbers;
