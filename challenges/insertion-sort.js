// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    while (array[i] < array[i - 1]) {
      const temp = array[i - 1];
      array[i - 1] = array[i];
      array[i] = temp;
      i -= 1;
    }
  }
  return array;
}

module.exports = insertionSort;