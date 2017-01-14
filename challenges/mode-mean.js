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
    let modes = {};
    let mode;
    let max = 1;


    for (let i = 0; i < array.length ; i++) {
        let val = array[i];
        sum += val;
        if (modes[val] === undefined ) modes[val] = 0;
        modes[val] += 1;
    }

    let mean = Math.floor(sum / array.length);

    for (val in modes) {

            if ( modes[val] > max ) {
                max = modes[val];
                mode = val;
            }
            else if ( modes[val] === max && val > mode ) {
                mode = val;
            }


        if(mode === undefined) {
            mode = Math.max(...Object.keys(modes));
        }

    }

    console.log("Mean:",mean,"max",mode);
    return mean === mode;
}


modemean([1,2,3,4,5,2,5,3,3]);
module.exports = modemean;
