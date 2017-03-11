// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    let inserted = false;

    for (let j = i - 1; j >= 0; j--) {
      if (curr < array[j]) {
        array[j + 1] = array[j];
      } else {
        array[j + 1] = curr;
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      array[0] = curr;
    }
  }

  return array;
}

module.exports = insertionSort;
