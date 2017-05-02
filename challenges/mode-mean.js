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
  // find mean of array
  let sum = 0;
  let arrayMean = 0;
  let arrayLength = array.length;
  
  // sum values of array 
  // try using reduce
  for (let i = 0; i < arrayLength; i += 1) {
    sum += array[i];
  }
  
  // divide sum of array by length of arrray to calculate mean
  arrayMean = Math.floor(sum / arrayLength);
  // console.log("Mean:  " + Math.floor(sum / arrayLength));
  
  // determine mode of array (most frequently recurring value)
  let modeArray = [];  // array to record multiple modes and
                       // and the frequency that they occur
  
  let arrayMode = 0;   // the mode of the array
  
  let counter;         // a counter to count the frequecy of
                       // value in the array
  
  let current;         // the value at an index of i that we
                       // will use compare to remaining elements
                       // of array
  
  // record modes of the array
  
  // check each value of array starting from first array
  // and compare with the remaining values of the array
  // ----- this is inefficient -----
  for (let i = 0; i < arrayLength; i += 1) {
    // current is the element we will compare to the 
    // remaining elements of the array, we move up one
    // position in the array with each pass
    current = array[i];
    
    // counter will record the number of times that current
    // is found in the array
    counter = 1;
    
    // implement nested loop to traverse through the array
    // with indexes greater than i and compare the value at
    // index j to current, if the value and index j === current
    // add one to counter
    for (let j = i + 1; j < arrayLength; j += 1) {
      if (current === array[j]) {
        counter += 1;
      }
    }
    
    // if counter is greater than 1, push the array consisting
    // of current and counter to modeArray
    if (counter > 1) {
      modeArray.push([current, counter]);
    }
  }
  
  // console.log(modeArray);
  
  // find the highest mode of the array
  let maxMode = 0;      // highest frequency mode
  let maxModeIndex;     // the index in modeArray with the
                        // highest frequncy mode
  let modeArrayLength = modeArray.length;
  
  // traverse through modeArray and compare modeArray[i][1], 
  // the frequency of mode (counter from earlier), to the maxMode, 
  // the current highest frequency mode.
  // If frequency at that element is higher than current maxMode,
  // set maxNode to that element and set maxModeIndex to that index
  for (let i = 0; i < modeArrayLength; i++) {
    if (modeArray[i][1] > maxMode) {
      maxMode = modeArray[i][1];
      maxModeIndex = i;
    }
  }
  
  // console.log("mode: = " + modeArray[maxModeIndex][0]);
  // set arrayMode equal to the value of the highest found modeArray
  if (maxMode !== 0) {
    arrayMode = modeArray[maxModeIndex][0];
  }
  return arrayMean === arrayMode;
}
module.exports = modemean;
