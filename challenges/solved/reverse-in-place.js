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
<<<<<<< HEAD:challenges/reverse-in-place.js
=======
  // array.forEach(function(el, idx, arr) {
  //   let store = el;
  //   arr.splice(idx, 1);
  //   arr.unshift(el);
  // });
  // return array;
>>>>>>> 7b643b732361617d9b88f0f441f217508aa1ca70:challenges/solved/reverse-in-place.js
  if (array === undefined || array.length === 0) return [];
  return array.reduce((accumulator, currentValue) => {
    return [currentValue].concat(accumulator);
  });
}

module.exports = reverseInPlace;