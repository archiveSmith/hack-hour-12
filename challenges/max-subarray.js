/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  let max = 0;

  function recursivelyGetAllSubArraysAndAddEachsElementsToSeeWhichOneHasLargestSum(array) {
    if (array.length === 0) return;
    let sum = array.reduce((accum, elem) => {
      return accum + elem;
    }, 0);
    max = max > sum ? max : sum;
    recursivelyGetAllSubArraysAndAddEachsElementsToSeeWhichOneHasLargestSum(array.slice(0, -1));
    recursivelyGetAllSubArraysAndAddEachsElementsToSeeWhichOneHasLargestSum(array.slice(1));
  }
  recursivelyGetAllSubArraysAndAddEachsElementsToSeeWhichOneHasLargestSum(arr);
  return max;
}
module.exports = maxSubarray;
