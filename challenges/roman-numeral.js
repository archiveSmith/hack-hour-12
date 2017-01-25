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
let roman = '';

  function getRomanNumerals(n) {
    if (n === 0) return;
    if (n >= 1000) {
      roman += 'M'; 
      n -= 1000;
    } else if (n >= 500) {
      if (n >= 900) {
        roman += 'CM';
        n -= 900;
      } else {
        roman += 'D';
        n -= 500;
      }
    } else if (n >= 100) {
        if (n >= 400) {
          roman += 'CD';
          n -= 400;
        } else {
          roman += 'C';
          n -= 100;
        }
    } else if (n >= 50) {
        if (n >= 90) {
          roman += 'XC';
          n -= 90;
        } else {
          roman += 'L';
          n -= 50;
        }
    } else if (n >= 10) {
        if (n >= 40) {
          roman += 'XL';
          n -= 40;
        } else {
          roman += 'X';
          n -= 10;
        }
    } else if (n >= 5) {
        if (n === 9) {
          roman += 'IX';
          n -= 9;
        } else {
          roman += 'V';
          n -= 5;
        }
    } else if (n >= 1) {
        if (n === 4) {
          roman += 'IV';
          n -= 4;
        } else {
          roman += 'I';
          n -= 1;
        }
    } getRomanNumerals(n);
  } getRomanNumerals(n);
  return roman;
}
module.exports = romanNumeral;
