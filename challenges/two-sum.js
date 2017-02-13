/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr || !n) return false;

  for (let i = 0; i < arr.length - 1; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      // console.log('testing: ', arr[i], '+', arr[j], '===', n);
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}


// console.log(twoSum([1,2,3,4,5], 9));

module.exports = twoSum;
