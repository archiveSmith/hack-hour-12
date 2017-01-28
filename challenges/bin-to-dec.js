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
  if(!binary || typeof binary !== 'string') return false;

  let splitBin = binary.split('');
  let decimal = 0;
  
  for (var i = splitBin.length - 1; i >= 0; i--) {
    decimal += Math.pow(2, splitBin.length - (i + 1)) * splitBin[i];  
  } return decimal;
}


function decToBin(binary) {
  let bin = '';
  let biggest2 = 0;
  
  while (binary - Math.pow(2, biggest2) > 0) {
    biggest2++;
  } 
  while (binary > 0) {
    if (binary - Math.pow(2, biggest2) >= 0) {
      bin += '1';
      binary -= Math.pow(2, biggest2);
    } else {
      bin += '0';
    } biggest2--;
  } bin += '0'.repeat(biggest2 + 1);
  return bin;

}
module.exports = binToDec;
