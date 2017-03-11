// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  function swap(arr, t1, t2) {
    let temp = arr[t1];
    arr[t1] = arr[t2];
    arr[t2] = temp;
  }
  for (let i = 1; i <= array.length; i++) {
    let j = i-1;
    while (array[j-1] && array[j] < array[j-1]) {
      swap(array, j, j-1);
      j--;
    }
  }
  return array;
}

//let testArr = [1,3,2,9,0,8,6,4];
//console.log(swap(testArr,1,2));
//console.log(insertionSort(testArr));


module.exports = insertionSort;