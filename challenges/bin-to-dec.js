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
    //remove beginning 0
    while(binary[0] === '0'){
        binary = binary.slice(1);
    }
    let decimal = 0;
    for (let i = binary.length-1, j = 1; i >= 0; i--, j *= 2) {
        if(binary[i] !== '1' && binary[i] !== '0') return;
        decimal += Number(binary[i]) * j;
    }
    return decimal;
}
console.log(binToDec('100101'));

module.exports = binToDec;


/*
each decimal place is a 2 spot
*/