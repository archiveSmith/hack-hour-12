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

'use strict'
function modemean(array) {
	let sum = array.reduce((result, item) => {
		return result + item;
	}, 0);
	let average = Math.floor(sum/array.length);
	//mode calculation
	const counts = [];
	for (let i = 0; i < array.length; i++) {
		let count = 0;
		for (let j = 0; j < array.length; j++){
			if(array[i]===array[j]) count++;
		}
		counts.push(count);
	}
	const sortedCount = counts.slice(0);
	sortedCount.sort((a,b) => b-a);
	//this is amount of the repititions of the mode
	//can use this to find the indexes of it on the counts
	//those indexes are the values of the mode in the array, which I can find the max of
	let modeCount = sortedCount[0];
	const modeIndexes = [];
	counts.forEach((item, index) => {
		if (item===modeCount) modeIndexes.push(index);
	});
	
	const arrModes = []; 
	array.forEach((item, index) => {
		for (let value of modeIndexes) {
			if(index === value) arrModes.push(item);
		}
	});
	let maxMode = arrModes.sort((a,b) => b-a)[0];
	if (maxMode === average) return true;
	else return false;
}

module.exports = modemean;
console.log(modemean([100,100,100,50,50,50,50,50,50,0,0,0]));