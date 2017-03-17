// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  var j = array.length - 1;
  for (var j = array.length - 1; j > 0; j--){
    for (var i = 0; i < j; i++) {
      if (array[i] > array[i+1]) {
        const temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}
module.exports = bubbleSort;
