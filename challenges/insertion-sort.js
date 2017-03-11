// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let sortC = array.splice(i, 1)[0];
    for (let j = i - 1; j >= -1; j -= 1) {
      if (sortC >= array[j] || j === -1) {
        array.splice(j + 1, 0, sortC);
        break;
      }
    }
  }
  return array;
}

module.exports = insertionSort;