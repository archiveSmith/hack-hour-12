/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    for (let i = 0; i < arr.length; i += 1) {
      let find = n - arr[i];
      let look = arr.slice(i);
      if (look.indexOf(find) > -1) {
          return true;
      }
    }
    return false;
}

module.exports = twoSum;
