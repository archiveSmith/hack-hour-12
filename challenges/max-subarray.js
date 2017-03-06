/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr) return 0;
  let totalSum = 0;
  let innerSum = 0;
  let i;
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i] > 0) innerSum += arr[i];
    else {
      if (Math.abs(arr[i]) > innerSum) {
        if (innerSum > totalSum) totalSum = innerSum
        innerSum = 0;
      }
      else {
        if (innerSum > totalSum) totalSum = innerSum;
        innerSum += arr[i];
      }
    }
  }
  if (innerSum > totalSum) totalSum = innerSum;
  return totalSum;
}

module.exports = maxSubarray;
