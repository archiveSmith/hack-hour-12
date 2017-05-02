/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr = [], n = null) {
//     //edge case
//     if (arr.length == 0 || !n) return false;

//     for (let i = 0; i < arr.length; i++) {
//         let temp = arr.indexOf(n - arr[i]);
//         if (temp !== i && temp > -1 ) {
//             return true;
//         }
//     }
    
//     return false;
// }

function twoSum(arr, n) {
  var nums = {};
  for (var i = 0; i < arr.length; i++) {
    if (nums[n - arr[i]]) return true;
    
    nums[arr[i]] = 1;
  }
  return false;
}

// let result1 = twoSum([1,2,3,4],5)
// console.log(result1)
// let result2 = twoSum([1,2,3,4,4],8);
// console.log(result2)
// let result3 = twoSum([3,4,5],5);
// console.log(result3)
// let result4 = twoSum([1,2,3,4],9);
// console.log(result4)
// let result5 = twoSum([],5);
// console.log(result5)
// let result6 = twoSum([1,2,3]);
// console.log(result6)
// let result7 = twoSum([1,2,3,4],8);
// console.log(result7)

module.exports = twoSum;
