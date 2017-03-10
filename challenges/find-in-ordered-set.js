/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let midpoint = Math.floor(arr.length / 2);
  
  if (arr[midpoint] === target) return true;
  if (arr.length === 1) return false;

  if (arr[midpoint] > target) {
    let newArr = arr.slice(0, midpoint);
    return findInOrderedSet(newArr, target);
  }
  if (arr[midpoint] < target) {
    let newArr = arr.slice(midpoint + 1);
    return findInOrderedSet(newArr, target);
  }
}


module.exports = findInOrderedSet;
