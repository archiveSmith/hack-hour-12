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
  let count = 0;
  const merged = {};
  for (let i = 0; i < arr1.length; i++) {
    // any duplicate values get saved with a unique tag
    let key = (arr1[i] in merged) ? arr1[i] + 'a' + ++count: arr1[i];
    merged[key] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    // any duplicate values get saved with a unique tag
    let key = (arr2[i] in merged) ? arr2[i] + 'a' + ++count : arr2[i];
    merged[key] = arr2[i];
  }

  // go through the keys, parse any duplicates, and sort the result
  return Object.keys(merged).map(function(key) {
    let duplicate = key.match(/^(\d*)a.*/);
    return duplicate ? Number(merged[key]) : Number(key);
  }).sort((l,h) => { return l - h });

}

var my_array = [3,4,6,8,10,11,15,19,21];
var another_array = [1,5,8,12,14,19];

console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;
