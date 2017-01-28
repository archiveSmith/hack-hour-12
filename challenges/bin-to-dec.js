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
   let result = 0;
   let binStr = binary.toString()
   let length = binStr.length

   for (let i = 0; i < length; i += 1) {
     result += +binStr[length - 1  - i] * (Math.pow(2, i))
   }

   return result;
 }

module.exports = binToDec;
