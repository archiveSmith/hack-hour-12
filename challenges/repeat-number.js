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

const array = [];

function repeatNumbers(array) {

  for (let i = 0, k = 1; i < array.length; i++, k++) {
    if(array[i] === array[k]) return array[i];
  }
}

console.log(repeatNumbers(array));

module.exports = repeatNumbers;
