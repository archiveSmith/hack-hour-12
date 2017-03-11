// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (array[j] > array[j+1]) {
      const tmp = array[j];
      array[j] = array[j+1];
      array[j+1] = tmp;
      j -= 1;
    }
  }
  return array;
}

console.log(insertionSort([3,6,4,5,1,2,7,8]));


module.exports = insertionSort;