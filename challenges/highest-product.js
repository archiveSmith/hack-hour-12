/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  const order = array.sort((a, b) => a - b);

  const max1 = order[0] * order[1] * order[order.length - 1];
  const max2 = order[order.length - 1] * order[order.length - 2] * order[order.length - 3];


  return Math.max(max1, max2);
}


module.exports = highestProduct;
