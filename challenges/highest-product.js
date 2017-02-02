/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    let positives = [];
    let negatives = [];
    array.forEach(n => {
        if (n > 0) positives.push(n);
        if (n < 0) negatives.push(n);
    });
    if (negatives.length === 0) return positives[0] * positives[1] * positives[2];

    negatives.sort(function(a, b){return a-b});
    positives.sort(function(a, b){return a-b}).reverse();

    console.log(positives, negatives);
    // return array[0] * array[1] * array[2];
}

function CCChighestProduct(array) {
    
}

console.log(highestProduct([1,2,3,4,5,5]));
console.log(highestProduct([-1,-2,-3,-4,-5]));
console.log(highestProduct([11,1,2,3,-4,-8,10]));


module.exports = highestProduct;
