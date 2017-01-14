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
// mode is the number that is occuring the most
// mean is the average

function modemean(array) {
    let mean = array.length > 1 ? Math.floor(array.reduce((ac, cu) => ac + cu, 0) / 2) : array[0];
    console.log('mean', mean);
    let obj = {};

    let currentMax = null;
    let mode = null;

    array.forEach(function(item) {
        if (!(item in obj)) obj[item] = 0;
        obj[item] = obj[item] + 1;
        if (obj[item] > currentMax) {
            mode = item;
            currentMax = obj[item];
        }
    });

    console.log('mode', mode);

    if (mean === mode) {
        return true;
    }

    return false;
}


console.log(modemean([1,2,2]))

module.exports = modemean;
