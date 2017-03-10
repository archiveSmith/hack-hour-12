/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let halfwayPoint = Math.floor(arr.length / 2);

  while (arr.length > 0) {
    halfwayPoint = Math.floor(halfwayPoint / 2);
    if (arr[halfwayPoint] === target) return true;
    if (arr.length === 1) return false;
    if (arr[halfwayPoint] > target) {
      arr.splice(halfwayPoint + 1);
    } else {
      arr.splice(0, arr.length - halfwayPoint - 1);
    }  
  }
}

module.exports = findInOrderedSet;
