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
	let mode = 0;
	let max = 0;
	let currCount = 0;
	let stringed = array.join(',');
	for(var i = 0; i < array.length; i++) {
		sum += array[i];
		let regex = array[i] + '';
		const regVar = new RegExp(regex,'g');
		currCount = stringed.match(regVar).length;
		if(currCount === max && array[i] > mode || currCount > max) {
			max = currCount;
			mode = array[i];
		}
	} const mean = Math.floor(sum/array.length);
  console.log(mean, mode);
	return mean === mode;
}
module.exports = modemean;
