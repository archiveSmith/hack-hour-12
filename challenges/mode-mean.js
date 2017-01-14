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
  let arrayMean = 0;
  let arrayLength = array.length;
  
  for (let i = 0; i < arrayLength; i += 1) {
    sum += array[i];
  }
  
  arrayMean = Math.floor(sum / arrayLength);
  
  let modeArray = [];
  let arrayMode = 0;
  let counter;
  let current;
  
  for (let i = 0; i < arrayLength; i += 1) {
    current = array[i];
    counter = 1;
    for (let j = i + 1; j < arrayLength; j += 1) {
      if (current === array[j]) {
        counter += 1;
      }
    }
    if (counter > 1) {
      modeArray.push([current, counter]);
    }
  }
  
  let highestMode = 0;

  for (let i = 0; i < modeArray.length; i++) {
    if (modeArray[i][1] > highestMode) {
      highestMode = modeArray[i][1];
    }
  }
  arrayMode = highestMode;
  return arrayMean === arrayMode;
}

module.exports = modemean;
