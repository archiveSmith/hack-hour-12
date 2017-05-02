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
    let mean = array.reduce(function(accum, next) {
        return accum + next;
    }, 0);
    mean = Math.floor(mean / array.length);
    // console.log(mean);
    let mode = array.reduce(function(accum, next) {
        accum[next] = ++accum[next] || 1;
        return accum;
    }, {});
    // console.log(mode);

    let mode1 = Object.keys(mode).map(function(key) {
        return mode[key];
    }).sort(function(a, b) {
        return a - b;
    }).pop();

    let mode2;
    for (let key in mode) {
        if (mode1 === mode[key]) mode2 = key
    }
    // console.log('mode1 =', mode1)
    // console.log('mode2 =', mode2)
    // console.log('typeof mean' + typeof mean);
    // console.log('typeof mode2' + typeof mode2);

    return parseInt(mode2) === mean;
}

module.exports = modemean;
