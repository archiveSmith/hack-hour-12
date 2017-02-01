/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array, n = 3) {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        for (let k = 0; k < array.length; k++) {
          if (k !== i && k !== j) {
            let product = array[i] * array[j] * array[k];
            if (product > max) max = product;
          }
        }
      }
    }
  }

  return max;
}

module.exports = highestProduct;
