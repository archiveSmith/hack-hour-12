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

function getAllProducts(array) {
  if (!array || !Array.isArray(array)) return 'Check Inputs';
  const products = [];

  function recurseGetAll3Products(arr) {
    if (arr.length === 3) {
      products.push(arr[0]*arr[1]*arr[2]); 
      return;
    }
    let copy;
    for (var i = 0; i < arr.length; i++) {
      copy = [...arr];
      copy.splice(i, 1);
      console.log(copy);
      recurseGetAll3Products(copy);
    }
  }
  recurseGetAll3Products(array);
  return products;
}
console.log(getAllProducts([1,7,3,4,2]))
module.exports = getAllProducts;
