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

function decToBin(decimal) {
  let binLen = 0;
  let numCheck = 1;
  let binStr = '';
  const binYes = '1';
  const binNo = '0';
  let i;
  if (decimal === 1) return '1';
  while (numCheck < decimal) {
    binLen += 1;
    numCheck *= 2;
  }
  for (i = binLen - 1; i > 0; i -= 1) {
    if (Math.pow(2, i) <= decimal) {
      binStr += binYes;
      decimal -= Math.pow(2, i);
    }
    else {
      binStr += binNo;
    }
  }
  if (decimal === 0) {
    binStr += binNo;
  }
  else {
    binStr += binYes;
  }
  return binStr;
}


module.exports = binToDec;
