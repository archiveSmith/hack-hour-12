// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

let array = [4,1,2,7,5,8,6,3]

function bubbleSort(array) {
  if(array.length < 2) return array;

  let sorted = array.length;
  while (sorted > 1) {
    //console.log(array);
    for (let i = 0, j = 1; i < sorted; i++, j++) {
          if(array[j] < array[i]){
            //console.log('swap',array[i],array[j]);
            [array[i], array[j]] = [array[j], array[i]];
          }

    }
    sorted--;
  }
  return array;
}

console.log(bubbleSort(array));

module.exports = bubbleSort;
