/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
       1     =    'I'
       4     =    'IV'
       5     =    'V'
       9     =    'IX'
       10    =    'X'
       40    =    'XL'
       50    =    'L'
       90    =    'XC'
       100   =    'C'
       400   =    'CD'
       500   =    'D'
       900   =    'CM'
       1000  =    'M'
 * 
 */

function romanNumeral(n) {
    if (typeof n !== 'number' || !Number.isInteger(n)) return;
    let result = '';
    let nums = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    const romanMap = {
       1     :    'I',
       4     :    'IV',
       5     :    'V',
       9     :    'IX',
       10    :    'X',
       40    :    'XL',
       50    :    'L',
       90    :    'XC',
       100   :    'C',
       400   :    'CD',
       500   :    'D',
       900   :    'CM',
       1000  :    'M'
    };
    console.log('hi');
    for (let i = nums.length - 1; i >= 0; i--){
        while (n !== 0 && n/nums[i]>=1) {
        result += romanMap[nums[i]];
        n = n - nums[i];
        }
    }
    return result;
}
module.exports = romanNumeral;
