/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // edge cases - empty array, n == 0, n not a number
  if (!(!isNaN(parseFloat(n)) && isFinite(n))) return;
  if (arr.length < 2) return;

  function recurse(arr, n) {
    if (arr.length === 0) return false;
    let num = arr.pop();
    for (let i = 0; i < arr.length; i++) {
      if (num + arr[i] === n) return true;
    }

    return recurse(arr, n);

  }

  return recurse(arr, n);

}

console.log(twoSum([7, 3, 5, 6, 8, 1, 3], 14));

module.exports = twoSum;
