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
  if(array.length === 0) return [0];
  if(array.length === 1) return [array[0]];
  let results = [];
  for(let i = 0; i < array.length; i++) {
    results.push(array.slice(0, i).concat(array.slice(i+1)).reduce((a, b) => {
      return a * b;
    }));
  }
  return results;
}

// function getAllProducts(array, counter = 0, results = []) {
//   if(counter === array.length) return results;
//   let tempArr = array.slice(0, counter).concat(array.slice(counter + 1));
//   results.push(tempArr.reduce((a, b) => {
//     return a * b;
//   }))
//   getAllProducts(tempArr, counter+1, results);
// }

// function getAllProducts(array) {
  
// }

// console.log(getAllProducts([1,7,3,4]));


module.exports = getAllProducts;
