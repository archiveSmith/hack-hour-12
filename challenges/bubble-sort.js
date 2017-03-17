// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array, stop = array.length) {
  if (stop === 0) return array;

  for (let i = 0; i < stop; i += 1) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }

  return bubbleSort(array, stop -= 1);
}

// console.log(bubbleSort([5, 1, 4, 2, 8]))

module.exports = bubbleSort;
