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
   console.log(n);
  const romNum = {
       0: '',
       1: 'I',
       2: 'II',
       3: 'III',
       4: 'IV',
       5: 'V',
       6: 'VI',
       7: 'VII',
       8: 'VII',
       9: 'IX',
       10: 'X',
       20: 'XX',
       30: 'XXX',
       40: 'XL',
       50: 'L',
       60: 'LX',
       70: 'LXX',
       80: 'LXXX',
       90: 'XC',
       100: 'C',
       200: 'CC',
       300: 'CCC',
       400: 'CD',
       500: 'D',
       600: 'DC',
       700: 'DCC',
       800: 'DCCC',
       900: 'CM',
       1000: 'M',
       2000: 'MM',
       3000: 'MMM'
     };
  const arr = [];
  let result = '';

  for (let i = 1; i <= String(n).length; i += 1) {
    arr.push(+String(n - +String(n).slice(i)).slice(i - 1));
  }

  arr.forEach(e => result += romNum[e])

  return result;
}

module.exports = romanNumeral;
