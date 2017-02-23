/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 // multiply the 2 highest numbers
 // and multiply the 2 lowest numbers
 // whichever is bigger, multiply by the remaining largst number

function highestProduct(array) {
  const highest = Math.max(array[0], array[1]);
  const lowest = Math.min(array[0], array[1]);

  var highestProductOfTwo = array[0] * array[1];
  var lowestProductOfTwo = array[0] * array[1];
  var highestProduct = array[0] * array[1] * array[2];

  array.forEach(function(current) {
    highestProduct = Math.max(highestProduct, current * highestProductOfTwo, current * lowestProductOfTwo);
    highestProductOfTwo = Math.max(highestProductOfTwo, current * highest, current * lowest);
    lowestProductOfTwo = Math.min(lowestProductOfTwo, current * highest, current * lowest);

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  });

  return highestProduct;
}

module.exports = highestProduct;
