/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (arr.length === 0 || !arr || typeof n !== 'number') return false;
  const search = {};
  for (let num of arr) {
    if (search[n - num] === true) return true;
    search[n - num] = true;
  }

  return false;
}

module.exports = twoSum;
