// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  function swap(arr, ind1, ind2) {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
  }

  let i = array.length - 1;
  let j = 0;
  let changed = true;

  while (changed && i >= 0) {
    let j = 0;
    let changed = false;
    while (j < i) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        changed = true;
      }
      j += 1;
    }
    i -= 1;
  }
  return array;
}

console.log(bubbleSort([6, 2, 4, 9, 1, 5]));

module.exports = bubbleSort;
