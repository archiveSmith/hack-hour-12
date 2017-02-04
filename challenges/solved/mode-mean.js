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
  const avg = Math.floor(array.reduce(function(memo, cur) {
  	return memo + cur;
  }) / array.length);
  //return avg;
  const buckets = {};
  array.forEach(function(item) {
  	if (buckets.hasOwnProperty(item)) {
  	  buckets[item] += 1;
  	} else {
  	  buckets[item] = 1;
  	}
  });
  const sortable = [];
  for (let prop in buckets) {
    sortable.push([prop, buckets[prop]]);
  }
  sortable.sort(function(a, b) {
  	return a[1] - b[1];
  });
  const mode = Number(sortable[sortable.length - 1][0]);
  return avg === mode;

}

module.exports = modemean;

