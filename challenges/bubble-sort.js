// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  if (!array) return;

  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  return array;
}

// console.log(bubbleSort([5,3,4,7,9,7,5,3,2,1,0]));

module.exports = bubbleSort;
