/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
    if (!binary || binary.length < 1) return;
    
    let count = 0;
    for (let i = binary.length - 1, digit = 0; i >= 0; i -= 1, digit += 1) {
        count += (Math.pow(2, digit) * binary[i]);
    }
    return count;
}

module.exports = binToDec;
