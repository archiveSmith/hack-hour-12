/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
    let results = [];
    for(let i = 0; i < array.length; i++) {
        let a = array[i][0];
        let b = array[i][1];
        for(let j = i + 1; j < array.length; j++) {
            let c = array[j][0];
            let d = array[j][1];
            if(c >= a && c <= b || d >= a && d <= b) {
                let tempArr = array[i].concat(array[j]).sort((a, b) => {
                    return a - b;
                });
                let mergedArray = [tempArr.slice(0), tempArr.slice(-1)];
                results.push(mergedArray);
            }
        }
    }
    return results;
}


module.exports = mergeRanges;
