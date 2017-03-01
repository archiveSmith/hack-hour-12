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
  if (!array) return;
  return array.filter((el, i) => array.indexOf(el) !== i)[0];
}

// let arr = [1,2,3,4,5,6,7,3,8,9];
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
