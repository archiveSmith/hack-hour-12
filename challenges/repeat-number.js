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
  if (!array || !Array.isArray(array)) return 'Check Inputs';

  const inArray = {};

  for (let i = 0; i < array.length; i++) {
    if (inArray.hasOwnProperty(array[i])) return array[i];
    else inArray[array[i]] = null;
  } return 'No Repeats';
}

module.exports = repeatNumbers;
