/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array === []) return 0;
  let negatives = [];
  let positives = [];
  array.forEach(num => {
    if(num < 0){
      negatives.push(num)
    } else {
      positives.push(num)
    }
  })
  console.log(negatives)
  console.log(positives)
  // let product = array[0] * array[1] * array[2];

  // return product;
  let arr = positives.sort().reverse().concat(negatives.sort())
  let product = arr[0] * arr[1] * arr[2];
  return product;
}


module.exports = highestProduct;
