// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



// function insertionSort(array, index = 1) {
//   // check if the current index of the array is undefined
//   if (!array[index]) return array;
//   let currentValue = array[index];
//   console.log('current value:', currentValue)
//   for (let i = index - 1; i >= 0; i -= 1) {
//     console.log('array of i:', array[i])
//     if (array[i] > currentValue) {
//       [array[i + 1]] = [array[i]];
//       if (i === 0) array[i] = currentValue;
//       console.log('array', array)
//     } else {
//       array[i] = currentValue;
//       let next = index + 1;
//       return insertionSort(array, next);
//     }
//   }

//   let next = index + 1;
//   return insertionSort(array, next);
// }

function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;
    while (j > 0 && array[j - 1] > array[j]) {
      [array[j], array[j - 1]] = [array[j - 1], array[j]];
      j -= 1;
    }
  }

  return array;
}

console.log(insertionSort([5, 3, 2, 4, 1]))

module.exports = insertionSort;