/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


 function modemean(array) {
   function mode(arr) {
     const counts = {};
     let maxNum = -Infinity;
     let maxNumCount = 0;

     for (let i = 0; i < arr.length; i += 1) {
       if (!counts[arr[i]]) {
         counts[arr[i]] = 1;
       } else {
         counts[arr[i]] = counts[arr[i]] += 1;
       }
     }

     for (let key in counts) {
       if (counts[key] >= maxNumCount && key > maxNum) {
         maxNum = key;
         maxNumCount = counts[key];
       }
     }

     return +maxNum;
   }

   function mean(arr) {
     return ~~(arr.reduce((p, c) => p + c) / arr.length);
   }
   return mode(array) === mean(array);
 }

module.exports = modemean;
