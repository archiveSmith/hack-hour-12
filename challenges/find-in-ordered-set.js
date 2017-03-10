/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

function findInOrderedSet(arr, target, lowRange = 0, highRange = arr.length, half) {
  halfwayPoint = Math.floor((lowRange + highRange) / 2);
  if (arr[halfwayPoint] === target) return true;
  if (highRange - lowRange < 2) return false;
  if (arr[halfwayPoint] > target) {
    highRange = halfwayPoint;
  } else {
    lowRange = halfwayPoint;
  }
  return findInOrderedSet(arr, target, lowRange, highRange, halfwayPoint)
}

module.exports = findInOrderedSet;
