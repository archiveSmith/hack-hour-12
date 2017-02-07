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
  let newArr = [];
  let i = 0;
  let j = 0;
  let n;
  let length = arr1.length + arr2.length;
  for (n = 0; n < length; n += 1) {
    if (i === arr1.length) {
      while (j < arr2.length) {
        newArr.push(arr2[j]);
        j += 1;
        n += 1;
      }
    }
    if (j === arr2.length) {
      while (i < arr1.length) {
        newArr.push(arr1[i]);
        i += 1;
        n += 1;
      }
    }
    while (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i += 1;
      n += 1;
    }
    while (arr2[j] < arr1[i]) {
      newArr.push(arr2[j]);
      j += 1;
      n += 1;
    }
    n -= 1;
  }
  return newArr;
}

module.exports = mergeArrays;
