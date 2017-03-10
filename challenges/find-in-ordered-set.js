/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (!arr || !target) return;
  if (target < arr[0]) return false;
  if (arr.length <= 1 && arr[0] !== target) return false;
  const split = Math.floor(arr.length / 2);
  if (target === arr[split]) return true;
  return target < arr[split] ? findInOrderedSet(arr.slice(0, split), target) : findInOrderedSet(arr.slice(split), target);
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 1));

module.exports = findInOrderedSet;
