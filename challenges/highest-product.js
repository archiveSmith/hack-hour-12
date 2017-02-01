/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

 function highestProduct(array) {
   console.log(array);
   if (array.length < 3) return 0;
   const sortedArray = array.sort();
   const absSortedArray = array.map(e => Math.abs(e)).sort((a, b) => a - b).reverse();

   if (Math.min(...sortedArray.slice(1)) >= 0) {
     sortedArray.reverse();
     return array[0] * array[1] * array[2];
   }
   if (Math.max(...sortedArray) < 0) {
     return absSortedArray[0] * absSortedArray[1] * absSortedArray[absSortedArray.length - 1];
   }

   return absSortedArray[0] * absSortedArray[1] * absSortedArray[2];
 }


module.exports = highestProduct;
