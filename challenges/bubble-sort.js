// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let sorted;
  let arr = array.slice();
  for(let i = 0; i < array.length; i++) {
    sorted = true;
    for(let j = 0; j < array.length - i; j++) {
      if(arr[j] > arr[j+1]) {
        swapValues(arr, j, j+1);
        sorted = false;
      }
    }
    if(sorted) return arr;
  }
  return arr;
}

function swapValues(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const arr = [1,33,2,11,22,4,55,82,30];

module.exports = bubbleSort;
