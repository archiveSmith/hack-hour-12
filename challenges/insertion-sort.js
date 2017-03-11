// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  const sorted = array.slice();
  for (let i = 1; i < sorted.length; i += 1) {
    const val = sorted[i];
    let j = i - 1;
    while (sorted[j] > val && j >= 0) {
      sorted[j + 1] = sorted[j];
      sorted[j] = val;
      j -= 1;
    }
  }
  return sorted;
}

module.exports = insertionSort;
