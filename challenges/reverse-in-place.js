'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {
  if (!array) return;
  for (let i = array.length - 1; i > 0; i -= 1) {
    array.push(array[i]);
  }
  return array.slice(0, array.length / 2);
}

// Keep track of two temporary variables 
// (one at the beginning and one at the end) and swap 
// the two elements at their positions (leaving any potential middle element in place).
function reverseInPlace(array) {
    let left = null;
    let right = null;
    const length = array.length;
    for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
        let temporary = array[left];
        array[left] = array[right];
        array[right] = temporary;
    }
    return array;
}

// Push each element to the end of the array 
// starting with the last element and moving in reverse order,
// then remove (splice) the original element.
function reverseInPlace(array) { 
  // let index = array.length-1;
  // while (index >= 0) {
  //   array.push(array[index])
  //   array.splice(index,1);
  //   index--;
  // }
  // return array;

  for (let i = array.length - 2; i >= 0; i -= 1) {
    array.push(array[i]);
    array.splice(i, 1);
  }
  return array;
}

// Start with second element
// Unshift each element to the beginning of the array
// Return spliced array from 0 to midway point of new array (rounded up for odd # of elements)
function reverseInPlace(array) {
  for (let i = 1; i < array.length; i += 2) {
    array.unshift(array[i]);
  }
  return array.splice(0, Math.ceil(array.length / 2));
}

// ES6
function reverseInPlace(array) {
  // should return empty array if given empty array or no input
  if (!Array.isArray(array)) return [];

  // Loop through first half of array only since all elements will be swapped by then
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
  }

  // Return array modified in place
  return array;
}


module.exports = reverseInPlace;


// APPROACH LECTURE BP

// reverse in place



// tests
// console.log(reverseInPlace([1, 2, 3, 4])); // -> [ 4, 3, 2, 1 ]
// console.log(reverseInPlace(['a', 'b', 'c'])); // -> [ 'c', 'b', 'a' ]
// console.log(reverseInPlace(['a'])); // -> ['a']



// 1. ***
// Push each element to the end of the array 
// starting with the last element and moving in reverse order,
// then remove (splice) the original element.
// function reverseInPlace(array) {
//   for (let i = array.length - 2; i >= 0; i--) {
//     array.push(array[i]);
//     array.splice(i, 1);
//   }
//   return array;
// }

// 2.
// Start with second element
// Unshift each element to the beginning of the array
// Return spliced array from 0 to midway point of new array (rounded up for odd # of elements)

// 3. ***
// Keep track of two temporary variables 
// (one at the beginning and one at the end) and swap 
// the two elements at their positions (leaving any potential middle element in place).
// function reverseInPlace(array) {
//   for (let i = 0, length = array.length; i < length / 2 - 1; i++) {
//     let left = array[i];
//     array[i] = array[length - 1 - i];
//     array[length - 1 - i] = left;
//   }
//   return array;
// }

// 4. ***
// Refactor #3 with Destructuring assignment
// function reverseInPlace(array) {
//   for (let i = 0, length = array.length; i < length / 2 - 1; i++) {
//     [array[i], array[length - i - 1]] = [array[length - i - 1], array[i]]
//   }
//   return array;
// }
