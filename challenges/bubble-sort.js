// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  for (let j = 0; j < array.length; j += 1) {
    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        // destructuring assignment syntax
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; 
      }
    }
  }
  return array;
}

// w/o the cool bracket thing
// function bubbleSort(array) {
//   let temp;
//   let current;
//   let next;
//   let needSorting;

//   for (let i = 0, len = array.length - 1; i < len; ++i) {
//     needSorting = false;

//     for (let j = 0; j < len; ++j) {
//       current = array[j];
//       next = array[j + 1];

//       if (current > next) {
//         array[j] = next;
//         array[j + 1] = current;
//         needSorting = true;
//       }
//     }
//     if (!needSorting) return array;
//   }
//   return array;
// }

// var a = [5,4,1,6,7,4,8];
// console.log(bubbleSort(a));

module.exports = bubbleSort;
