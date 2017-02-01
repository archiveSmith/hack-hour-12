/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
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
console.log(highestProduct([1,2,3,4,5]));
console.log(highestProduct([4,1,2,10,10]));
console.log(highestProduct([1,2,-30,-4,20]));
// console.log(highestProduct([1,2,3,4,5]));
// console.log(highestProduct([1,2,3,4,5]));

module.exports = highestProduct;
