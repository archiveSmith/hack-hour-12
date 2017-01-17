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
  let sum = array.reduce(function(a, b) {
    return a + b;
  }, 0);
  let mean = Math.floor(sum / array.length);

  let modeMap = {}

  for(let i = 0; i < array.length; i++){
    if(!modeMap[array[i]]){
      modeMap[array[i]] = 0;
    }
    modeMap[array[i]]++;
  }



  // let mode = Math.max.apply(null, modeMap);

  // console.log(modeMap)
  
// console.log (sum)
}

module.exports = modemean;
