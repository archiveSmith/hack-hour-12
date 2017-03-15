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
  let arr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length){
    if (arr1[i] > arr2[j]) arr.push(arr1[i], arr2[j]);
  }
  
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; i++){
      if(i < j) arr.push(arr1[i], arr2[j]);
      if (i > j) arr.push(arr2[j], arr1[i])
    }
  }  let arr = [];

  let i = 0;
  let j = 0;
  
  console.log(arr1.length)
  console.log(arr2.length)
  
    while(i <= arr1.length + 1 || j <= arr2.length + 1) {
    console.log("i ", arr1[i])
    console.log("j ", arr2[j])
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i], arr2[j]);
    }
    if (arr2[j] < arr1[i]){
      arr.push(arr2[j], arr1[i])
    }
      i++;
      j++

  }
  return arr;
}


module.exports = mergeArrays;
