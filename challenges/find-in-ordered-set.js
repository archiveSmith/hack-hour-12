/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  if (arr.length <= 10) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return true;
      }
    }
    return false;
  }
  const splitPoint = Math.floor(arr.length/2);
  console.log(splitPoint);
  const a = arr.slice(0, splitPoint);
  const b = arr.slice(splitPoint);
  const la = a[a.length - 1];
  const lb = b[b.length - 1];
  console.log(a, la);
  console.log(b, lb);
  if (la === target) return true;
  if (lb === target) return true;
  if (la > target) {
    return findInOrderedSet(a, target) ;
  } else {
    return findInOrderedSet(b, target) ;
  }
}

var nums = [1, 6, 7, 9, 17, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 67, 68, 69, 70, 81, 82, 83, 84, 85, 86, 97, 100, 101, 102, 103, 104, 105, ,106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
console.log(findInOrderedSet(nums, 4));

// findInOrderedSet(nums, 2);


module.exports = findInOrderedSet;
