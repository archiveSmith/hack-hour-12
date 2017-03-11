// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if (!array || !Array.isArray(array)) 'Check Inputs';

  let inserted, compare;

  for (var i = 1; i < array.length; i++) {
    inserted = false;
    [compare] = array.splice(i, 1);
    for (var j = 0; j < i; j++) {
      if (compare <= array[j]) {
        array.splice(j, 0, compare)
        inserted = true;
        break;
      } 
    } 
    if (!inserted) array.splice(i, 0, compare);
  }
  return array;
}

console.log(insertionSort([2,3,1,2,6]));

module.exports = insertionSort;