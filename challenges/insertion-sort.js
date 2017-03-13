// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

// worst case: O(n^2)
// best case: already sorted O(n)

function insertionSort(array) {
  if (!array) return;
  if (array.length <= 1) return array;

  let current, compare;
  // loop over array starting with 2nd element
  for (let i = 1; i < array.length; i += 1) {
    compare = i;
    // compare, and while previous element is larger than current,
    while (compare > 0 && array[compare - 1] > array[compare]) {
      // swap values
      [array[compare - 1], array[compare]] = [array[compare], array[compare - 1]];
      // move compare to next smaller item
      compare -= 1;
    }
  }
  return array;
}

// arr = [12, 5, 9, 4, -3, 72, 36, 0, 18];
// console.log(insertionSort(arr));

module.exports = insertionSort;