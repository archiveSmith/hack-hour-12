// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
  }

  if (!array) return [];
  // Check each element against each that came before it
  let i;
  for (i = 0; i < array.length; i += 1) {
    let prevChecked = array.slice(0, i);
    let temp = array[i];
    let notSwapped = true;
    let numToCheck = i - 1;
    while (notSwapped && numToCheck > 0) {
      if (temp > array[numToCheck]) notSwapped = true;
      else {
        swap(array[numToCheck], array[numToCheck + 1]);
      }
      numToCheck -= 1;
    }
  }
  return array;
}

module.exports = insertionSort;