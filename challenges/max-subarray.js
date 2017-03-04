/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    let acc = arr[i];
    if (acc > max) max = acc;
    for (let j = i + 1; j < arr.length; j += 1) {
      acc = acc + arr[j];
      if (acc > max) max = acc;
    }
  }

  return max;
}

function maxSubarrayOptimal(arr) {

  var currentMax = Number.NEGATIVE_INFINITY;
  var finalMax = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < arr.length; i++) {
    currentMax = Math.max(arr[i], currentMax + arr[i]);
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}

module.exports = maxSubarray;
