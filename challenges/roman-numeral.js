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
  let tester = n;
  const numberArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const romanArr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  let romanStr = '';
  while (tester > 0) {
    for (let i = numberArr.length - 1; i >= 0; i -= 1) {
      while (tester >= numberArr[i]) {
        romanStr += romanArr[i];
        tester -= numberArr[i];
      }
    }
  }
  return romanStr;
}

module.exports = romanNumeral;
