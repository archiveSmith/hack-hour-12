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
  const binLen = binary.length;
  let i;
  let total = 0;
  for (i = 0; i < binLen - 1; i += 1) {
    if (binary[i] === '1') {
      total += Math.pow(2, (binLen - i - 1));
    }
  }
  if (binary[binLen - 1] === '1') {
    total += 1;
  }
  return total;
}

module.exports = binToDec;
