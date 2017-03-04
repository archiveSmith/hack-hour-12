/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr, sum = 0) {
  console.log(arr);
  
  if (!arr) return 0;
  let answer = [];
  answer.push(sum);
  let firstNum = arr.splice(0, 1);
  if (arr.length === 0) {
    answer.sort(function(a, b) {
      return b - a;
    })
    return answer[0];
  }
  return (maxSubarray(arr, sum) || maxSubarray(arr, sum += firstNum));
}

module.exports = maxSubarray;
