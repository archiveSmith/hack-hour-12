// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  let swap = false;
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      const tmp = array[i];
      array[i] = array[i+1];
      array[i+1] = tmp;
      swap = true;
    }
  }
  if (swap === true) {
    bubbleSort(array);
  } else {
    return array;
  }
}

// console.log(bubbleSort([6,1,4,3,2,5,9,7,8]))

module.exports = bubbleSort;
