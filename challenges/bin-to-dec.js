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

function binToDec(binary, num = 0, exp = 0) {
  console.log(binary, num, exp)
  if (binary.length === 0) return num;
  let curr = binary[binary.length - 1];
  console.log(curr)
  if (curr == 0) {
    console.log(binary.slice(0, binary.length - 1))
    return binToDec(binary.slice(0, binary.length - 1), num, exp = exp + 1);
  }

  if (curr == 1) {
    let pow = Math.pow(2, exp);
    console.log(binary.slice(0, binary.length - 1));
    return binToDec(binary.slice(0, binary.length - 1), num + pow, exp = exp + 1)
  }
  
}

binToDec('11');

module.exports = binToDec;
