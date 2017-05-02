/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  let result = '';
  let leftover = n;

  while (leftover > 0) {
    if (leftover >= 1000) {
      result += 'M';
      leftover -= 1000;
    } else if (leftover >= 900) {
      result += 'CM';
      leftover -= 900;
    } else if (leftover >= 500) {
      result += 'D';
      leftover -= 500;
    } else if (leftover >= 400) {
      result += 'CD';
      leftover -= 400;
    } else if (leftover >= 100) {
      result += 'C';
      leftover -= 100;
    } else if (leftover >= 90) {
      result += 'XC';
      leftover -= 90;
    } else if (leftover >= 50) {
      result += 'L';
      leftover -= 50;
    } else if (leftover >= 40) {
      result += 'XL';
      leftover -= 40;
    } else if (leftover >= 10) {
      result += 'X';
      leftover -= 10;
    } else if (leftover >= 9) {
      result += 'IX';
      leftover -= 9;
    } else if (leftover >= 5) {
      result += 'V';
      leftover -= 5;
    } else if (leftover >= 4) {
      result += 'IV';
      leftover -= 4;
    } else if (leftover >= 1) {
      result += 'I';
      leftover -= 1;
    }
  }

  return result; 
}
console.log(romanNumeral(2004));
module.exports = romanNumeral;
