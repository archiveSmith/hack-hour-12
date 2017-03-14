/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array, index = 0, products = []) {
  if (!array.length) return [0];
  if (index === array.length) return products;

  let currProduct = 1;
  for (let i = 0; i < array.length; i += 1) {
    if (i !== index) currProduct *= array[i];
  }
  
  products.push(currProduct);
  return getAllProducts(array, index += 1, products);
}

// console.log(getAllProducts([]))

module.exports = getAllProducts;
