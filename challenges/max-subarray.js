/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//   console.log(arr);
//   if (arr.length === 1) return arr[0];
//   let arrSum = arr.reduce((acc, cv) => acc + cv);
//   console.log('sum', arrSum);
//   let compare = Math.max(maxSubarray(arr.slice(1)), maxSubarray(arr.slice(0, -1), maxSubarray(1, -1)));
//   console.log(compare)
//   return Math.max(arrSum, compare);
// }

function maxSubarray(arr) {
  let max = arr.reduce((acc, cv) => acc + cv);
  // console.log('max', max)
  for (let i = 0; i < arr.length; i += 1) {
    let currSum;
    // console.log(max)
    for (let j = i + 1; j < arr.length; j += 1) {
      let subSum = arr[i] + arr[j];
      if (subSum > max) max = subSum;
      currSum += subSum;
    }

    if (currSum > max) max = currSum;
  }

  return max;
}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))

module.exports = maxSubarray;
