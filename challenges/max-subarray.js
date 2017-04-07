/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  var currentMax = Number.NEGATIVE_INFINITY;
  var finalMax = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < arr.length; i++) {
    // which is greater: arr[i] or the sum of a subarray
    // ending in arr[i]? 
    currentMax = Math.max(arr[i], currentMax + arr[i]);

    // which is greater: currentMax or the previous max?
    finalMax = Math.max(finalMax, currentMax)
  }
  return finalMax;
}

module.exports = maxSubarray;
