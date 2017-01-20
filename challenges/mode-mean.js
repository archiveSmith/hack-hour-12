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
  let sum = 0;
  let count = {};
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    if (count[array[i]]) count[array[i]] += 1;
    else count[array[i]] = 1;
  }

  let mode = array[0];
  for (let prop in count) {
    if (count[prop] > count[mode]) mode = prop;
    else if (count[prop] === count[mode]) {
      mode = prop < mode ? mode : prop;
    } 
  }

  return Number(mode) === Math.floor(sum/array.length);
}

console.log(modemean([1, 1, 1]));

module.exports = modemean;
