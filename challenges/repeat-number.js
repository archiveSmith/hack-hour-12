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
//   let cache = {};
//   for (let num of array) {
//     if (cache[num] === 1) return num;
//     else cache[num] = 1;
//   }
// }

function repeatNumbers(array) {
  const expectedSum = (array.length * (array.length + 1)) / 2;
  let actualSum = array.reduce((acc, cv) => acc + cv);
  return actualSum - expectedSum;
}

const arr = [1, 2, 3, 4, 5, 7, 8, 5];

console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
