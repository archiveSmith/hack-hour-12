/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// have a running total
// loop through first iteration... and then do another loop.... to multiply the number
// and then do another loop to multiply the third number.... check in the third for looop.
// NASTY

function highestProduct(array) {
    let product;
    let tempProduct;
    for(let i = 0; i < array.length - 2; i++) {
        for(let j = i + 1; j < array.length; j++) {
            for(let k = j + 1; k < array.length - 1; k++) {
                tempProduct = array[i] * array[j] * array[k];
                if(tempProduct > product || product === undefined) {
                    product = tempProduct;
                }
            }
        }
    }
    return product;
}

module.exports = highestProduct;
