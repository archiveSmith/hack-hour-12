// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  let temp;

  for (let i = 0; i < array.length; i += 1) {
    temp = array[i];
    for (let j = array.slice(0, i).length - 1; j = 0; j -= 1) {
      while (temp > array[j]) {
        array[j] = array[j + 1];
      }
      array[j] = temp;
    }
  }

  return array;
}

module.exports = insertionSort;
