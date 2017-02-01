/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
    if(array.length < 3 || !Array.isArray(array)) {
        return 0;
    }
    let product = 0;
    let tempProduct;
    for(let i = 0; i < array.length - 2; i++) {
        for(let j = i + 1; j < array.length - 1; j++) {
            for(let k = j + 1; k < array.length; k++) {
                tempProduct = array[i] * array[j] * array[k];
                if(tempProduct > product) {
                    product = tempProduct;
                }
            }
        }
    }
    return product;
}

module.exports = highestProduct;
