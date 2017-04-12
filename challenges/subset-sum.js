
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
    if (array.length == 0) {
        if (target == 0) return true;
        return false;
    } else {
        let i = array[0];
        return subsetSum(array.slice(1),(target - i)) || subsetSum(array.slice(1),target);
    }
}

// var arr1 = [3,7,4,2]
// console.log(subsetSum(arr1, 5)) // true
// var arr2 = [3,34,4,12,5,12]
// console.log(subsetSum(arr2, 32))  
// var arr3 = [8,2,4,12]
// console.log(subsetSum(arr3, 13)) // false 
// var arr4 = [8,-2,1,-3]
// console.log(subsetSum(arr4))
// var arr5 = [6]
// console.log(subsetSum(arr5, 6))
// var arr6 = []
// console.log(subsetSum(arr6, 6))
module.exports = subsetSum;

