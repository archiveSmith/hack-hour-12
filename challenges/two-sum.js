/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   if (arr.length === 0) return false;
   if (arr.includes(n)) return true;
   for (let i = 0; i < arr.length; i += 1) {
     const arrCopy = arr.slice();
     arrCopy.splice(arr.indexOf(arr[i]), 1)
     if (arrCopy.includes(n - arr[i])) return true;
   }
   return false;
 }

module.exports = twoSum;
