/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time and O(n) space
 *
 */


function mergeArrays(arr1, arr2) {
  let arr1i = arr1[0];
  let arr2k = arr2[0];
  let i = 1;
  let k = 1;
  const result = [];
  while (arr1i || arr2k) {
    if (arr1i < arr2k || (arr1i && !arr2k)) {
      result.push(arr1i);
      arr1i = arr1[i += 1];
    } else {
      result.push(arr2k);
      arr2k = arr2[k += 1];
    }
  }
  return result;
}


module.exports = mergeArrays;
