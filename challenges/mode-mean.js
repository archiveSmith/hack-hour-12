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
	let sorted = array.sort();
	let min; let max; let mode = 0;
	let modeHash = {};
	min = max = array[0];
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] < min) min = array[i];
		if (array[i] > max) max = array[i];
		
		if (modeHash.hasOwnProperty(array[i])) modeHash[array[i]] += 1;
		else modeHash[array[i]] = 1;
	}
	Object.keys(modeHash).forEach(key => if (modeHash[key] > mode) mode = modeHash[key]);
	let mean = Math.floor((max-min)/2);
	return (mode === mean);

}

module.exports = modemean;
