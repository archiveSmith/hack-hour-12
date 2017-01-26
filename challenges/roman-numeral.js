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
    let cache = [[1, 'I'],[4, 'IV'],[5, 'V'],[9, 'IX'],[10, 'X'],[40, 'XL'],[50, 'L'],[90, 'XC'],[100, 'C'],[400, 'CD'],[500, 'D'],[900, 'CM'],[1000, 'M']];
    let output = "";
    
    function recurse(num) {
        console.log('num at top: ', num);
        if (num === 0) return;
        if (num === 1) { output += 'I'; return 0;}
        let i = cache.length - 1;
        let target = cache[i][0];
        while (target >= num) {
            i -= 1;
            target = cache[i][0];
            console.log('inside: ', target, ' n: ', num,  ' output: ', output);
        }
        output += cache[i][1];

        console.log('outside: ', target, ' n: ', num,  ' next: ', num - target);
        return recurse(num - target);
    }

   recurse(n);
}

romanNumeral(36);
module.exports = romanNumeral;
