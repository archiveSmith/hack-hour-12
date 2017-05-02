/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    function sumArr (arr) {
        return arr.reduce((result,item) => {
            return result + item
        }, 0);
    }
    array.sort((a,b) => b-a)
    while(array[0] > target) {
        array.splice(0,1);
    }
    for (let i = 0; i < array.length; i++){
        result = [];
        result.push(array[i]);
        for (let j = i+1; j < array.length; j++){
            result.push(array[j]);
            if (sumArr(result) === target) return true;
            if (sumArr(result) > target) {
                result.pop();
            }
        }
    }
    return false;
}
console.log(subsetSum([8, 2, 4, 12], 13))

module.exports = subsetSum;