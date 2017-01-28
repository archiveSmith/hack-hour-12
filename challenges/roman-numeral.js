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
let conversions = {
  '0': '',
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
  '6': 'VI',
  '7': 'VII',
  '8': 'VIII',
  '9': 'IX',
  '10': 'X',
  '20': 'XX',
  '30': 'XXX',
  '40': 'XL',
  '50': 'L',
  '60': 'LX',
  '70': 'LXX',
  '80': 'LXXX',
  '90': 'XC',
  '100': 'C',
  '400': 'CD',
  '500': 'D',
  '900': 'CM',
  '1000': 'M',
}

// function romanNumeral(n) {
//   let romNum = '';
//   function convert(num) {
//     if (num < 10) 
//   }

//   convert(num)

// }

// function romanNumeral(n, curr = '', next) {
//   if (next < 10) {
//     curr = curr + conversions[next];
//     return curr;
//   }

//   if (n <= 100) {
//     let remain = n % 10;
//     curr += conversions[n - remain]
//     romanNumeral()
//   }

// }

function romanNumeral(n, curr = '') {
  let numStr = n.toString();
  if (numStr.length === 1) {
    return (curr + conversions[numStr]);
  }
  let i = numStr[0] * Math.pow(10, numStr.length - 1);
  curr += conversions[i];
  return romanNumeral(numStr.slice(1), curr);
}

console.log(romanNumeral(439))
module.exports = romanNumeral;
