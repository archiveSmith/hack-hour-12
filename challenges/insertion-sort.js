// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  // Make copy of original array so we don't alter the original array
  let result = array.slice();
  // initialize j variable to hold the current index when finding place to insert
  let j;
  let toInsert;
  for(let i = 1; i < result.length; i++) {
    toInsert = result[i];
    j = i;
    // loop until you find the index to insert
    while(j >= 0 && toInsert < result[j - 1]) {
      // move elements to the right to find the index to insert
      result[j] = result[j-1];
      j--;
    }
    // insert the value into correct index at j
    result[j] = toInsert;
  }
  return result;
}

module.exports = insertionSort;