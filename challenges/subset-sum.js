/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  let sortedArr = array.sort();
  console.log(sortedArr);
}

module.exports = subsetSum;






// // /* You are given an array of integers and a target number. Write a function that returns true if
// // * there is a subset of the array that sums up to the target and returns false otherwise. A subset
// // * can be any size and the elements do not have to appear consecutively in the array.

// function subsetSum(array, target) {
//   let sortedArr = array.sort(function(a, b) { return a-b });
//   let diff;
//   let i;
//   let j;
  
//   if(target < sortedArr[0]) {
//     return false;
//   }
//   while(sortedArr[array.length - 1] > target) {
//     sortedArr.pop();
//   }
  
//   for(i = sortedArr.length - 1; i >= 0; i -= 1) {
//     diff = target - sortedArr[i];
    
    
//     // if(diff > sortedArr[0]) continue;
//     // for(j = 0; j < sortedArr[i]; j += 1) {
//     //   if(diff === sortedArr[j]) return true;
      
//     // }
//   }
  
//   console.log(sortedArr);
// }

// // subsetSum([3, 7, 4, 2], 5);
// subsetSum([3, 34, 4, 12, 5, 12], 32);