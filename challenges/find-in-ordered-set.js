/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr[0] > target) return false;
  if (arr[0] === target) return true;
  return findInOrderedSet(arr.slice(1), target);
}


module.exports = findInOrderedSet;
