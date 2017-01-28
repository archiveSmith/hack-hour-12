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
    let binArray = binary.split('');
    let currentPos = 1;
    let result = 0;

    console.log(binArray);
    for (let i = binArray.length - 1; i >= 0; i--) {
        if (binArray[i] !== '0') {
            console.log("Current position:", currentPos, "value",binArray[i]);
            result += currentPos;
        }
        currentPos *= 2;
    }

    return result;
}

function decToBin(dec) {
    const binArray = [];
    let currentPosition = 1;

    while (dec) {

    }

}

//console.log(binToDec('0')); //-> 0
//console.log(binToDec('11')); //-> 3
//console.log(binToDec('100')); //-> 4 module.exports = binToDec;
//console.log(binToDec('101')); //-> 5
console.log(binToDec('101010101')); //-> 5
//console.log(binToDec('101')); //-> 5