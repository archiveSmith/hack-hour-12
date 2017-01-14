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
   let mean = 0;
   let mode = array[0];
   const cache = {};

   for (let i = 0; i < array.length; i++) {
     mean += array[i];
     if (!cache[array[i]]) cache[array[i]] = 1;
     else cache[array[i]] += 1;
   }

   mean = Math.floor(mean / array.length);

   for (let key in cache) {
     if (cache[key] > cache[mode]) {
       mode = key;
     } else if (cache[key] === cache[mode]) {
       if (key > mode) {
         mode = key;
       }
     }
   }

   return mean === mode;
 }

module.exports = modemean;
