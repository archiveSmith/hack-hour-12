// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let arr = array.slice();
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length - i; j++) {
      if(arr[j] > arr[j+1]) {
        swapValues(arr, j, j+1);
      }
    }
  }
  return arr;
}

function swapValues(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

module.exports = bubbleSort;
