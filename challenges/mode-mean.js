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


 let sum;
 let total = array.length;
 let cache = {};
 let mean;
 let mode;

 let findSum = array.reduce(function(prev, curr) {
   sum = prev + curr;
   return sum;
 });

 array.forEach(function(elem) {
   if (cache[elem] === undefined) {
     cache[elem] = 1;
   } else {
     cache[elem]++;
   }
    return cache;
 });

let arr = Object.keys(cache).map(function(key) {
  return cache[key];
});

 max = Math.max.apply( null, arr );

 mean = Math.floor(findSum / total);

 if (mode === mean) {
   return true;
 }
   return false;
}

module.exports = modemean;
