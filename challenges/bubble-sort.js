// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array, n = array.length) {
  if (n === 0) return array;
  for (let i = 0; i < n; i += 1) {
    if (array[i + 1] < array[i]) [array[i], array[i + 1]] = [array[i + 1], array[i]];
  }
  return bubbleSort(array, n - 1);
}

module.exports = bubbleSort;
