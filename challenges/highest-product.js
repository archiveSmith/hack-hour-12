/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!array || ˝array.length < 3) return 0;
    array = array.sort();
    return (array[array.length - 3] * array[array.length - 2] > array[0] * array[1]) ? array[array.length - 3] * array[array.length - 2] * array[array.length - 1] : Math.abs(array[0] * array[1]) * array[array.length - 1];
}

// console.log(highestProduct([-12, 5, 0, 3, 7, -4]));

module.exports = highestProduct;
