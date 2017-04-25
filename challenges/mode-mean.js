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

// Mode is the number that appears the most often in a set of numbers

function modemean(array) {
  let sum = array.reduce((acc, current) => current += acc);
  let mean = sum / array.length;

  // get mode
  let mode = -Infinity;
  let modeFreq = -Infinity;
  const modeCount = {};

  // use modeCount to increment counts
  for (let i = 0; i < array.length; i++) {
    if (!modeCount[array[i]]) modeCount[array[i]] = 0;
    modeCount[array[i]] += 1;
    if (modeCount[array[i]] >= modeFreq && array[i] > mode) {
      mode = array[i];
      modeFreq = modeCount[array[i]];
    };
  }

  return mode === mean;
}

module.exports = modemean;
