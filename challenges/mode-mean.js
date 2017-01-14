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
  if (array.length === 1) {
    return true;
  }
  let mean = array.reduce(function(current, next) {
    return current + next;
  }, 0);
  mean = Math.floor(mean / array.length);
  //Create an object with names set to the values in array and values set to the
  // number of instances of each one
  let modeObj = array.reduce(function(current, next) {
    if (current[next]) {
      current[next] += 1;
      return current;
    }
    else {
      current[next] = 1;
      return current;
    }
  }, {});
  let modeVal = 0;
  let mode = -Infinity;
  //Iterate through object
  for (let names in modeObj) {
    //If the value is equal or greater and the name property is greater, set new mode
    if (modeObj[names] >= modeVal && names > mode) {
      modeVal = modeObj[names];
      mode = names;
    }
  }
  console.log(mode);
  console.log(mean);
  //Don't know why it is performing type conversion but triple
  //equals does not work here
  return mode == mean ? true : false;
}

module.exports = modemean;
