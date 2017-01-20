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

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function reverseInPlace(array) {
  if (array === undefined || array.length === 0) return [];
  const length = array.length;
  const middle = ~~(array.length / 2);
  for (let i = 0, j = length - 1; i < middle; i++, j--) {
    swap(array, i, j);
  }

  return array;
}

module.exports = reverseInPlace;
