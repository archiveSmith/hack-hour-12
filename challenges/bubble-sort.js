// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  // [array[i], array[j]] = [array[j], array[i]];
}

function bubbleSort(array) {
  // check if valid input
  if (!Array.isArray(array)) return;

  let swapped;

  for (let i = 0; i < array.length; i++) {
    swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      // swap if current element is larger than the next element
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }

    // if no swaps were made, already in sorted order
    if (!swapped) break;
  }

  return array;
}

module.exports = bubbleSort;
