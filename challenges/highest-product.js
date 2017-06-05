/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // multiply the 2 highest numbers
 // and multiply the 2 lowest numbers
 // whichever is bigger, multiply by the remaining largst number

function highestProduct(array) {
  if (array.length < 3) return 0;

  array.sort((a, b) => a - b);

  return Math.max(
    array[0] * array[1] * array[array.length - 1],
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3]
  );
}

module.exports = highestProduct;
