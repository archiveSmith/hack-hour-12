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
    if(typeof n !== 'number') {
        return;
    }
    let obj = {1 : 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'};
    let arr1 = [1, 5, 10, 50, 100, 500, 1000];
    let rom = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let roman = "";
    let index = 0;
    let index = index - 1;
    for(let key in obj) {
        if(key < n)

    }
    
    
    

    // switch(n) {
    //     case 1: return 'I';
    //     case 4: return 'IV';
    //     case 5 < 10: return 'V';
    //     case 9: return 'IX';
    //     case 10: return 'X';
    //     case 40: return 'XL';
    //     case 50: return 'L';
    //     case 90: return 'XC';
    //     case 100: return 'C';
    //     case 400: return 'CD';
    //     case 500: return 'D';
    //     case 900: return 'CM';
    //     case 1000: return 'M';
    //     default: return;
    // }

}

romanNumeral(11);

module.exports = romanNumeral;
