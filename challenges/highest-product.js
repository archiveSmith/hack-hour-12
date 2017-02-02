/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // multiply the 2 highest numbers
 // and multiply the 2 lowest numbers
 // whichever is bigger, multiply by the remaining largst number

function highestProduct(array) {
  if (array.length < 3) return 0;

  array.sort((a, b) => a - b);

  last1 = array[array.length - 1];
  last2 = array[array.length - 2];
  last3 = array[array.length - 3];
  lowestTwo = array[0] * array[1];
  highestTwo = last1 * last2;

  if (last1 < 0) return last1 * last2 * last3;

  return lowestTwo < highestTwo ?  highestTwo * last3 : lowestTwo * last1;
}

module.exports = highestProduct;
