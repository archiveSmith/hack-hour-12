/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return 0;
    var max = -Infinity;
    var secondmax = -Infinity;
    var thirdmax = -Infinity;

    var min = Infinity;
    var secondmin = Infinity;
    var thirdmin = Infinity;

    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            thirdmax = secondmax;
            secondmax = max;
            max = array[i];
        } else if (secondmax < array[i]) {
            thirdmax = secondmax;
            secondmax = array[i];
        } else if (thirdmax < array[i]) {
            thirdmax = array[i];
        }

        if (min > array[i]) {
            thirdmin = secondmin;
            secondmin = min;
            min = array[i];
        } else if (secondmin > array[i]) {
            thirdmin = secondmin;
            secondmin = array[i];
        } else if (thirdmin > array[i]) {
            thirdmin = array[i];
        }
    }

    var result1 = max*secondmax*min;
    var result2 = max*secondmax*thirdmax;
    var result3 = min*secondmin*max;
    var result4 = min*secondmin*thirdmin;

    return (Math.max(result1,result2,result3,result4))
}

// var array1 = [1,2,3,4,5];
// console.log(highestProduct(array1));

// var array2 = [-1,-2,-8,-7,4];
// console.log(highestProduct(array2))

// var array3 = [-1,-2,-4,-5];
// console.log(highestProduct(array3))

module.exports = highestProduct;
