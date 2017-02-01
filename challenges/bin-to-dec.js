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

/*function decToBin (decimal) {
    binary = ''
    twoPower = 1;
    //find biggest exponent
    while (decimal / twoPower >= 2) {
        twoPower *= 2; 
    }
    while (decimal / twoPower < 2) {
        console.log(decimal, twoPower);
        if (decimal / twoPower >= 1) binary += '1';
        else binary += '0'
        decimal = decimal - twoPower;
        twoPower = twoPower/2;
    }
    return binary;
}*/

console.log(binToDec('1110'));
console.log(decToBin(24));

module.exports = binToDec;


/*
each decimal place is a 2 spot
*/