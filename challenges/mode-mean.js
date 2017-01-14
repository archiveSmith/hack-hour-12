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
  array = array.sort((a, b) => a - b);
  let sum = 0;
  let cache = {};
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    if (cache[array[i]]) cache[array[i]] += 1;
    else cache[array[i]] = 1;
  }

  let mode = array[0];
  for (let prop in cache) {
    if (cache[prop] > cache[mode]) mode = prop;
    else if (cache[prop] === cache[mode]) {
      mode = prop < mode ? mode : prop;
    } 
  }

  return Number(mode) === Math.floor(sum/array.length);
}

module.exports = modemean;
