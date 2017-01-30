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

    const store = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        4: "IV",
        5: "V",
        1: "I",
    };

    const storeLen = Object.keys(store).length;

    while (n > 0) {
        for (let i = storeLen - 1; i >= 0; i -= 1) {
            if (n >= Object.keys(store)[i]) {
                roman += store[Object.keys(store)[i]];
                n -= Object.keys(store)[i];
                break;
            }
        }
    }
    return roman;
}

module.exports = romanNumeral;
