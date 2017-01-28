/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4 1*0 + 1 + 
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5 
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  const arr = binary.split('').map(a => parseInt(a));
  while (arr[0] === 0) {
    arr.shift();
  }
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + (arr[i] * Math.pow(2, i));
  }
	return sum;
}

module.exports = binToDec;
