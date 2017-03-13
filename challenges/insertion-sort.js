// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    const c = array.splice(i, 1)[0];
    for (let j = i - 1; j >= -1; j -= 1) {
      if (c >= array[j] || j === -1) {
        array.splice(j + 1, 0, c);
        break;
      }
    }
  }
  return array;
}

function insertionSortProvided(array) {
  for (var i = 1; i < array.length; i++) {
    var j = i;
    while (array[j] < array[j-1] && j > 0) {
      var temp = array[j];
      array[j] = array[j-1];
      array[--j] = temp;
    }
  }
  return array;
}

module.exports = insertionSort;