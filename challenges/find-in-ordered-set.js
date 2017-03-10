/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!arr.length) return false;
  let halfway = Math.floor(arr.length/2);
  if (arr[halfway] === target) return true;
  else if (target > arr[halfway]) return findInOrderedSet(arr.slice(halfway + 1), target)
  else return findInOrderedSet(arr.slice(0, halfway), target);
}



module.exports = findInOrderedSet;
