// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i+1]] = [array[i+1], array[i]];
        sorted = false;
      }
    }
  }

  return array;
}

// ======= TESTING =============
// const result = bubbleSort([5,6,1,3,4,2,6,9,0,5])
// console.log(result)
module.exports = bubbleSort;
