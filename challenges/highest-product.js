/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  if (!array || array.length < 3) return 0;

  array.sort();
  const maxFromMins = array[0] * array[1];
  const topMax = array[array.length - 2] * array[array.length - 3];

  if (maxFromMins > topMax) return maxFromMins * array[array.length - 1];
  return topMax * array[array.length - 1];
}


module.exports = highestProduct;
