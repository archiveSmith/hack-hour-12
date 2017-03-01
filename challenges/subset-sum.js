/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target, sum = 0) {
  //base case 1: if sume equals target, return true
  if (sum === target) return true;
  //base case 2: if sum > target, return false
  if (sum > target) return false;
  //base case 3: if array is empty, return false
  if (!array.length) return false;
  //call function twice: once subtracting first element, other not
  let leaveIt = subsetSum(array.slice(1), target, sum);
  let takeIt = subsetSum(array.slice(1), target, sum += array[0]);
  //both remove first elmt from arr
  let boolean = takeIt || leaveIt;
  return boolean;
}

(array, target) => !array.length? target === 0 : subsetSum(array.slice(1), target) || subsetSum(array.slice(1), target - array[0]);

module.exports = subsetSum;
