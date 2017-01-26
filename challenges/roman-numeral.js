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
    if (!n || n < 0) return;
    let cache = [[1, 'I'],[4, 'IV'],[5, 'V'],[9, 'IX'],[10, 'X'],[40, 'XL'],[50, 'L'],[90, 'XC'],[100, 'C'],[400, 'CD'],[500, 'D'],[900, 'CM'],[1000, 'M']];
    let output = "";
    function recurse(num) {
        if (num === 0) return;
        let i = cache.length - 1;
        let target = cache[i][0];
        if (num === target) { output += cache[i][1]; return;}
        while (target > num) {
            i -= 1;
            target = cache[i][0];
        }
        output += cache[i][1];
        // console.log('outside: ', target, ' n: ', num,  ' next: ', num - target, 'output: ', output);
        recurse(num - target);
    }
   recurse(n);
   return output;
}
// for (let i = 0; i < 4000; i += 1) {
//     console.log(romanNumeral(i));
// }
module.exports = romanNumeral;
