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

// O(n^2)
function getAllProducts(array) {
  if (!Array.isArray(array)) return;
  if (array.length === 0) return [0];

  const products = [];

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }

    products.push(product);
  }

  return products;
}

// O(n)
// function getAllProducts(array) {
//   if (!Array.isArray(array)) return [0];
//   const products = [];
//   let totalProduct = 1;
//
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== 0) totalProduct *= array[i];
//   }
//
//   for (let j = 0; j < array.length; j++) {
//     if (array[j] !== 0) {
//       products.push(totalProduct / array[j]);
//     } else {
//       products.push(totalProduct);
//     }
//   }
//
//   return products;
// }
// console.log(getAllProducts([1,7,3,0,4]));
module.exports = getAllProducts;
