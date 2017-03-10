/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let start = 0
  let end = arr.length - 1;
  
  while (start + 1 != end) {
    let total = start + end;
    let mid = (total - total % 2) / 2;

    if (arr[mid] == target) {
      return true;
    }

    if (target > arr[mid]){
      start = mid;
    } else if ( target < arr[mid]) {
      end = mid
    } 
  }

  return false;
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// result = findInOrderedSet(nums, 10);
// console.log(result)

module.exports = findInOrderedSet;
