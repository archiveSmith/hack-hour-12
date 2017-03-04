/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 function sum(arr) {
   return arr.reduce((p, c) => p + c, 0);
 }

 function maxSubarray(arr) {
   const compArr = [];

   for (let i = 0; i < arr.length; i += 1) {
     for (let j = i; j < arr.length; j += 1) {
       compArr.push(sum(arr.slice(i, j)));
     }
   }
   compArr.push(sum(arr));

   return Math.max(...compArr);
 }

module.exports = maxSubarray;
