/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // check is arr is an array and n is a numbers
  if (!Array.isArray(arr) || typeof n !== 'number') return 'bad inputs';
  
  // loop through arr and check is any combination of two numbers will sum to n
  for (let i = 0; i < arr.length; i += 1) {
    let sum = arr[i];
    for (let j = i + 1; j < arr.length; j += 1) {
      sum += arr[j];
      if (sum === n) return true;
      else sum -= arr[j];
    }
  }
  return false;
}

module.exports = twoSum;
