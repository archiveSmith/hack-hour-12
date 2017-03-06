/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   // check if valid input
//   if (!Array.isArray(arr)) return;
//
//   // store max sum
//   let max = -Infinity;
//
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       // calculate sum
//       sum += arr[j];
//
//       // check if sum is greater than max
//       if (sum > max) max = sum;
//     }
//   }
//
//   return max;
// }
function maxSubarray(arr) {
  // check if valid input
  if (!Array.isArray(arr)) return;

  // set max, sum to -Infinity so every number is bigger than it
  let max = -Infinity;
  let sum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // check if adding the next number makes it larger than prev sum
    sum = Math.max(arr[i], sum + arr[i]);

    // set max to the bigger number
    max = Math.max(sum, max);
  }

  return max;
}
// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
module.exports = maxSubarray;
