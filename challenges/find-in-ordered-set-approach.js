/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// binary search using low and high ranges
function findInOrderedSet(arr, target) {
  // setup a recursive helper function by identifying a start and end point
  function binSearch(start, end) {
    // get the middle-ish value
    const mid = Math.floor(start + end / 2);
    // begin to think recursively... we have 2 base cases
    // check this middle value is our target
    if (arr[mid] === target) return true;
    // check if we can no longer recurse / if start is equal to end
    if (start === end) return false;

    // based on the comparison of our middle value to the target
    // recurse with a different set of start and end arguments
    if (arr[mid] > target) {
      return binSearch(start, mid - 1);
    } else {
      return binSearch(mid + 1, end);
    }
  }
  return binSearch(0, arr.length - 1);
}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4)); // -> true
console.log(findInOrderedSet(nums, 2)); // -> false
