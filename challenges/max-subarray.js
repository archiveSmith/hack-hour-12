/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  //start at right place to start checking
  function sumArr (arr) {
    return arr.reduce((result, item) => {
      return result += item;
    });
  };
  let max = sumArr(arr); 
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; j > i; j--){
      max = Math.max(max, sumArr(arr.slice(i,j)));
    };
  };
  return max;
}
console.log(maxSubarray([3,-9,0,-1,4]))
module.exports = maxSubarray;
