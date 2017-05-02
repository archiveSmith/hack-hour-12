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
    let mean  = Math.floor(array.reduce((a,b) => a + b) / array.length);
    let mode = Math.max.apply(null, array);
    let previousCount = 0;
    let counter = 0;
    array.sort((a, b) => a - b);
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] === array[i+1]) {
            counter++;
        } else {
            if(counter >= previousCount && counter !== 0) {
                previousCount = counter;
                mode = array[i];
            }
            counter = 0;
        }
    }
    return mean === mode;
}

module.exports = modemean;
