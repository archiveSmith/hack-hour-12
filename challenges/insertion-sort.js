// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
  for (let i = 1; i < array.length; i += 1) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j -= 1) {
      swap(array, j, j - 1);
    }
  }
  return array;
}

module.exports = insertionSort;