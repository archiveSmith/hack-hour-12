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
    const romaMap = {
        1: 'I',
        4: 'IV',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    }

    let romaNumeral = [];

    function  viniVidiVici (numeral, divisor, roma) {
        let quotient = Math.floor(numeral / divisor );
        if (quotient) {
            for (let i = 0; i < quotient; i++) {
                romaNumeral.push(roma);
            }
            numeral -= quotient * divisor;
        }

        return numeral;
    }

    Object.keys(romaMap).sort((a,b) => b - a).forEach(function(divisor) {
        n = viniVidiVici(n, divisor, romaMap[divisor]);
    })

    return romaNumeral.join('');
}

console.log(romanNumeral(14));

module.exports = romanNumeral;
