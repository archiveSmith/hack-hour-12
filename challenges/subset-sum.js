/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// function subsetSum(array, target) {
//     let count;
//     for(let i = 0; i < array.length; i++) {
//         let count = array[i];
//         if(count === target) {
//             return true;
//         }
//         for(let j = i + 1; j < array.length; j++) {
//             count += array[j];
//             if(count === target) {
//                 return true;
//             }
//         }
//         for(let j = i + 1; j < array.length; j++) {
//             count -= array[j];
//             if(count === target) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

function subsetSum(array, num) {
  if(array.length === 0) return false;
  if(array[0] === num) return true;
  else {
    let left = array.slice(1);
    let takeIt = subsetSum(left, num - array[0]);
    let leaveIt = subsetSum(left, num);
    return takeIt || leaveIt;
  }
}

module.exports = subsetSum;
