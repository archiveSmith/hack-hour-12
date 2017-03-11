// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

const array = [4,3,5,7,2,8,1,0,-1];

function insertionSort(array) {
  let tmp;

  for (let i = 0; i < array.length; i++) {
    let k = i + 1;
    let j = i;
    for (; array[k] < array[j] && j >= 0; j--, k--) {
      [array[k], array[j]] = [array[j], array[k]];
    }
  }
  return array;
}


console.log(insertionSort(array));

module.exports = insertionSort;