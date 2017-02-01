/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (!array || array.length < 3) return 0;
    const arr = array.sort();
    if (arr[arr.length - 1] < 0) {
        return (arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]);
    }
    return (arr[arr.length - 3] * arr[arr.length - 2] >= arr[0] * arr[1]) ? arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1] : Math.abs(arr[0] * arr[1]) * arr[arr.length - 1];
}

// console.log(highestProduct([-12, 5, 0, 3, 7, -4]));

module.exports = highestProduct;
