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
    if (!array || array.length < 1) return [];
    for (let i = 1; i < array.length; i += 1) {
        array.splice(array.length - i, 0, array.shift());
    }
    return array;
}


console.log(reverseInPlace());

module.exports = reverseInPlace;


// function reverseInPlace(array, startI = 0, endI = array.length - 1) {
//     if (startI > endI) return array;
//     [array[startI], array[endI]] = [array[endI], array[startI]];
//     return reverseInPlace(array)
// }