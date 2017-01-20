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
  if (array.length == 0) return [];
  let max = Math.floor(array.length / 2) - 1;

  for (var i = 0; i <= max; i++) {
      let temp = array[array.length - 1 - i];
      array[array.length - 1 - i] = array[i];
      array[i] = temp;
  }

  return array;
}

// console.log(reverseInPlace([1,2,3,4,5]))
// console.log(reverseInPlace([1,2,3,4]))
// console.log(reverseInPlace([]))

module.exports = reverseInPlace;
