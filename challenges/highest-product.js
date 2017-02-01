/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   const sortedArray = array.sort();
   const absSortedArray = array.map(e => Math.abs(e)).sort((a, b) => a - b).reverse();

   if (Math.min(...sortedArray.slice(1)) >= 0) {
     sortedArray.reverse();
     return array[0] * array[1] * array[2];
     // console.log(array)
   }
   // console.log(absSortedArray);
   return absSortedArray[0] * absSortedArray[1] * absSortedArray[2];
 }


module.exports = highestProduct;
