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
    let mean = Math.floor(array.reduce((ac, cu) => ac + cu, 0) / array.length);
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

    if (mean === mode) {
        return true;
    }
    return false;
}

module.exports = modemean;
