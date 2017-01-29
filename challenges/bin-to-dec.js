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
  const binaryCheck = /^['0'|'1']/;
  
  if (binary.search(binaryCheck) === -1) return 'not binary';
  
  if (binary.length === 1) return Number(binary);

  if (binary[0] === '1') return Math.pow(2, binary.length - 1) + binToDec(binary.slice(1));
  else return binToDec(binary.slice(1));
}

module.exports = binToDec;
