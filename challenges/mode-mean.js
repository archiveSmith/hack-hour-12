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

  for (let i = 0; i < array.length; i++) {
    mean += array[i];
  }
  mean = mean / array.length;

  // get mode
  let mode;
  let modes = [];
  let modeCount = {};

  // use modeCount to increment counts
  for (let i = 0; i < array.length; i++) {
    if (!modeCount[array[i]]) modeCount[array[i]] = 0;
    modeCount[array[i]] += 1;
  }

  for (num in modeCount) {
    if (modeCount[num] >= modeCount[mode] || !mode) {
      mode = num;
      modes.push(num);
    }
  }

  if (Math.max(modes) > mode) mode = Math.max(modes);

  return Number(mode) === mean;
}

module.exports = modemean;
