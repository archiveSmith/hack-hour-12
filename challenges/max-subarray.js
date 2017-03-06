/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // if (!arr) return;
  // let result = -Infinity;

  // for (let i = 0; i < arr.length - 1; i += 1) {
  //   let subSection = [arr[i]];
  //   let sum = arr[i];
  //   if (sum > result) result = sum;
  //   for (let j = i + 1; j < arr.length; j += 1) {
  //     subSection.push(arr[j]);
  //     sum = subSection.reduce((acc, val) => val + acc);
  //     if (sum > result) result = sum;
  //   }
  // }
  // return result;

  let currMax = -Infinity;
  let finalMax = -Infinity;

  for (let i = 0; i < arr.length; i += 1) {
    // check if new element makes sum larger
    currMax = Math.max(arr[i], currMax + arr[i]);
    // check how it compares to overall max
    finalMax = Math.max(finalMax, currMax);
  }

  return finalMax;
}

module.exports = maxSubarray;
