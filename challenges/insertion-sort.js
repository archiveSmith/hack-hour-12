// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let result = array.slice();
  let j;
  let toInsert;
  for(let i = 1; i < result.length; i++) {
    toInsert = result[i];
    j = i;
    while(j >= 0 && toInsert < result[j - 1]) {
      result[j] = result[j-1];
      j--;
    }
    result[j] = toInsert;
  }
  return result;
}

// console.log(insertionSort([1,5,3,2,66,44,33,75,23]));

module.exports = insertionSort;