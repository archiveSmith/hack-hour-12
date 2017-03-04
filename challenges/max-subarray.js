/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */
//maxSubarray([15,20,-5,10]) // 40
//maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) // 18
function maxSubarray(arr) {
  let sum = 0;
  // loop through
  for (let i = 0, k = 1; k < arr.length; i++, k++) {
      // console.log(i +': ' + arr[i] , k + ': ' + arr[k]);
    if(arr[i] < arr[k]) {
      sum += arr[i] + arr[k];
      // console.log('i',i,'k',k,'sum',sum);
    } else if (sum === 0) {
      sum += arr[0];
    }
  }
  return sum;
}

module.exports = maxSubarray;
