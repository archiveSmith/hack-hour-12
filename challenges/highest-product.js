/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  const order = array.sort((a, b) => a - b);

  const max1 = order[0] * order[1] * order[0];
  const max2 = order[0] * order[1] * order[2];

  return Math.max(max1, max2);
}


console.log(highestProduct([7, 20, 6, 18, 4, 9, -20, -2, 1]));


module.exports = highestProduct;
