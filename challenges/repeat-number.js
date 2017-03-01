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
  if(!arguments || !array[0]) return;
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj.hasOwnProperty(array[i])) return array[i];
    else obj[array[i]] = true;
  }
  return;
}
//const arr = [32,2,1,0,92,4,9,3];
//console.log(repeatNumbers(arr));
module.exports = repeatNumbers;
