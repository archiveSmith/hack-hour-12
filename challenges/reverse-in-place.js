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

// function reverseInPlace(array) {
//     let counter;
//     let temp;
//     if(array === undefined || array.length === 0) {
//         return [];
//     }
//     for(let i = 0; i < array.length; i++) {
//         counter = array.length - 1;
//         temp = array[counter];
//         while(counter > i) {
//             array[counter] = array[counter - 1];
//             counter--;
//         }
//         array[i] = temp;
//     }
//     return array;
// }

function reverseInPlace(array) {
    let temp;
    for(let i = 0; i < array.length - 1; i < j, j--) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

module.exports = reverseInPlace;
