/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   const compObj = {};

   if (arr.length === 0) return false;
   for (let i = 0; i < arr.length; i += 1) {
     if (arr[i] in compObj) return true;
     compObj[n - arr[i]] = true;
   }
   return false;
 }

module.exports = twoSum;
