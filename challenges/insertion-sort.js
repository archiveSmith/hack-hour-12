// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  if (!array) return [];
  let finalArr = [];
  let i;
  for (i = 0; i < array.length; i += 1) {
    let counter = 1;
    finalArr.push(array[i]);
    while (finalArr[i] - counter !== undefined && finalArr[i] < finalArr[i - counter]) {
      finalArr[i - counter + 1] = finalArr[i - counter];
      counter += 1;
    }
    finalArr[i - counter] = array[i];
  }
  return finalArr;
}

module.exports = insertionSort;