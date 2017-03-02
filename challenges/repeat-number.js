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

  // // O(n) time, O(1) space:
  // // Gauss: sum all numbers in range from 1 - n
  // const expected = (array.length - 1 * array.length) / 2;
  // let actual = 0;
  // // actually sum the whole array
  // for (let i = 0; i < array.length; i += 1) {
  //   actual += array[i];
  // }
  // // compute the difference
  // return actual - expected;

}

// let arr = [1,2,3,4,3];
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
