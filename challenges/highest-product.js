/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  if(!Array.isArray(array)) return 'Input should be Array';

  const threeBiggest = [];
  let index = 0;
  
  for (let i = 0; i < 3; i++) {
    array.reduce((a, b, i) => { return (b > a ? (index = i, b) : a);}, 0);
    threeBiggest.push(array[index]);
    array.splice(index, 1);
  } 
  return threeBiggest.reduce((a, b) => { return a * b; }, 1)
}


module.exports = highestProduct;
