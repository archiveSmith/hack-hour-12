// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {

  function recurse(array, n) {
    let swap = false;
    for (let i = 0; i < n; i++) {
      if (array[i] > array[i+1]) {
        const tmp = array[i];
        array[i] = array[i+1];
        array[i+1] = tmp;
        swap = true;
      }
    }
    if (swap === true) {
      return recurse(array, n - 1);
    } else {
      return array;
    }
  }
  return recurse(array, array.length);
}

console.log(bubbleSort([6,1,4,3,2,5,9,7,8]))

module.exports = bubbleSort;
