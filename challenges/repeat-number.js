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

//const array = [1,9,2,3,4,5,6,7,8,9];

function repeatNumbers(array) {

 array = array.sort((a,b) => a - b);
 for (let i = 0, k = 1; i < array.length; i++, k++) {
   if(array[i] === array[k]) return array[i];
 }
}

console.log(repeatNumbers(array));

module.exports = repeatNumbers;
