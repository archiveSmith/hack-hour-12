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
  let obj = {};
  let max = 0;
  let mode;
  let sum = 0;

  for (var i = 0; i < array.length; i++) {
      //mean;
      sum += array[i];
      //mode;
      if (obj[array[i]] === undefined) {
          obj[array[i]] = 1;
      } else {
          obj[array[i]]++;
          if (obj[array[i]] > max) {
            mode = array[i];
            max = obj[mode];
          }
      }
  }

  return mode === Math.floor(sum/array.length);
}

module.exports = modemean;
