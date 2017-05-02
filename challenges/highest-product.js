/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

  // verify that the array contains at least three values
  if (array.length < 3) return 0;
  // verify that the array only contains numerals
  if (array.join('').match(/^[^0-9]+$/)) return 0;

  // sort the array
  array = array.sort((low,high) => (low - high));
  // handle an all negative array
  if (array[array.length - 1] < 0) {
    return array.splice(-3).reduce((acc, curr) => acc * curr);
  }

  const highestNum = array[array.length-1];
  // get the sum of the two lowest numbers (this accounts for neg * neg)
  let lowsum = array[0] * array[1];

  // get the sum of the two lowest of the top three numbers
  let highsum = array[array.length - 3] * array[array.length - 2];

  return (lowsum > highsum) ? lowsum * highestNum : highsum * highestNum;

}

//highestProduct([-10,-15,-20,-25]); // expect 3000
//console.log(highestProduct([-40,-15,4,56,65,14,4])); // expect 50960
//console.log(highestProduct([-40,-15,4,56,14,4])); // expect 33600
module.exports = highestProduct;
