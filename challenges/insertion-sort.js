// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(arr) {
    let i = 0;

    while (i < arr.length) {

       if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            i = i - 1;
       } else {
            i = i + 1;
       }
    }

    return arr;    
}

//================ TEST ===================
// array = [3, 7 ,4 ,9, 5, 2, 6 ,1]
// result = insertionSort(array)
// console.log(result)
module.exports = insertionSort;