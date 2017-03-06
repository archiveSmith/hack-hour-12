/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    //brute force, n ^ 3 
        let sum = 0;

        //find all possible array of consecutive numbers 
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i; j < arr.length; j++) {
                let temp_sum = arr.slice(i,j + 1).reduce((accu, ele) => {
                    return accu + ele;
                })
                //compare sum of them 
                if (temp_sum > sum) {
                    sum = temp_sum
                }
            }
        }

        return sum; 
    // alternative

        //if 2 consecutive number is both positive or negavtive ,add them up
        //ex: [1,-2,3,4,5] => [1,-2,12]
    
        // i know that if i try to find largest sum, i will have to take as many
        // postive number as i can and take least negative number as i can.
        // With an array that positive number and negative number appear every 
        // other elements, i probably stop at a positive number.

        //start at a negative number, add the next postive number to that 


}

console.log(maxSubarray([15,20,-5,10]))

module.exports = maxSubarray;
