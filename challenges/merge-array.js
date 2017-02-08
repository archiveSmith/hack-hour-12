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

// function mergeArrays(arr1, arr2) {
//   let i,j;
//   let mergedArr = [];
//   for (i = 0, j = 0; i < arr1.length && j < arr2.length;) {
//     if (arr1[i] <= arr2[j]) {
//       mergedArr.push(arr1[i]);
//       i += 1;
//     } else {
//       mergedArr.push(arr2[j]);
//       j += 1;
//     }
//   }

//   if (arr1.length === i) {
//     mergedArr = mergedArr.concat(arr2.slice(j));
//     return mergedArr;
//   } else if (arr2.length === j) {
//     mergedArr = mergedArr.concat(arr1.slice(i));
//     return mergedArr;
//   }

//   return mergedArr;
// }

function mergeArrays(arr1, arr2, mergedArr = []) {
  if (arr1.length === 0 || arr2.length === 0) {
    let rest = arr1.length === 0 ? arr2 : arr1;
    mergedArr = mergedArr.concat(rest);
    return mergedArr;
  }

  if (arr1[0] <= arr2[0]) {
    let next = mergedArr.push(arr1[0]);
    return mergeArrays(arr1.slice(1), arr2, next);
  } else {
    let next = mergedArr.push(arr2[0]);
    
  }
}

// console.log(mergeArrays([1, 2, 4], [1, 7]))

module.exports = mergeArrays;
