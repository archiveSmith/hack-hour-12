// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length-1; i++){
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      }
    }
  }
  return array;
}
//console.log(bubbleSort([5,9,2,1,4,3,0]))

module.exports = bubbleSort;
