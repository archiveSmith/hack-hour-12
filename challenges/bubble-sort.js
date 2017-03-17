// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let j = 0; j < array.length; j += 1) {
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; 
      }
    }
  }
  return array;
}

// var a = [5,4,1,6,7,4,8];
// console.log(bubbleSort(a));

module.exports = bubbleSort;
