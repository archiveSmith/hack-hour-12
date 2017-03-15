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
  console.log(array);
  const newArr = [];
  if (array.length === 0) return [0];
  for (let i = 0; i < array.length; i += 1) {
    const remove = array.pop();
    const prod = array.reduce((a, b) => a * b, 1);
    newArr.push(prod);
    array.unshift(remove);
  }
  return newArr.reverse();
}

console.log(getAllProducts([1, 7, 3, 4, 2, 6])); //  [84, 12, 28, 21]
// [] [ 1 ] [ 5, 0, 2, 3, 4 ] [ 0, 1, 2, 0 ]
console.log(getAllProducts([])); //  [84, 12, 28, 21]
console.log(getAllProducts([1])); //  [84, 12, 28, 21]
console.log(getAllProducts([5, 0, 2, 3, 4])); //  [84, 12, 28, 21]
console.log(getAllProducts([0, 1, 2, 0])); //  [84, 12, 28, 21]






module.exports = getAllProducts;
