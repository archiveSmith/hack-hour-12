/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr || !n) return false;

  const hash = {};
  for (let i = 0; i < arr.length; i += 1) {
    // if hash contains a value that is equal to the difference
    // between target and the current array value, return true 
    if (hash[n - arr[i]]) return true;
    // add the key with value 1 (= falsy)
    hash[arr[i]] = 1;
  }
  return false;
}


// console.log(twoSum([1,2,3,4,5], 9));

module.exports = twoSum;
