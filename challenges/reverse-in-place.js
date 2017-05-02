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

    let len = array.length;
    array.push(' ');

    let storage = array.length - 1;
    for (let i = 0, k = 1; k < storage - 1; i++,k++) {
        array[storage] = array[i];
        array[i] = array[len - k];
        array[len  - k] = array[storage];

        console.log(storage,array.length,len);
        console.log(array,i,k);
    }

    array.length = len;

    return array;
}

console.log(reverseInPlace(['s','h','i','t']));
module.exports = reverseInPlace;
