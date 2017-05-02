// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    if (!num || typeof num !== 'number') return false;
    if (num === 0) return 'Zero';

    const numToWord = {
        '0': '',
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '10': 'Ten',
        '11': 'Eleven',
        '12': 'Twelve',
        '13': 'Thirteen',
        '14': 'Fourteen',
        '15': 'Fifteen',
        '16': 'Sixteen',
        '17': 'Seventeen',
        '18': 'Eighteen',
        '19': 'Nineteen',
        '20': 'Twenty',
        '30': 'Thirty',
        '40': 'Forty',
        '50': 'Fifty',
        '60': 'Sixty',
        '70': 'Seventy',
        '80': 'Eighty',
        '90': 'Ninety',
        '00': ''
    };
    const place = {
        '0': '',
        '1': 'Thousand',
        '2': 'Million',
        '3': 'Billion',
        '4': 'Trillion',
        '5': 'Quadrillion',
        '6': 'Quintillion' 
    };
    const splitStr = [];
    let numStr = num + '';
    let placeInd = 0;
    let result = '';

    while (placeInd * 3 < numStr.length) {
        let currStr = '';
        let sliced = numStr.slice(-(placeInd * 3 + 3), -(placeInd * 3 + 1) === -1 ? numStr.length : -(placeInd * 3));
        
        if (sliced.length > 2) {
            const hundreds = sliced.slice(0, 1);
            currStr += (hundreds === '0' ? '' : numToWord[hundreds] + 'Hundred') + currStr;
        } if (sliced.length > 1) {
            const tens = sliced.slice(-2); 
            currStr += (tens < 20 ? numToWord[tens] : numToWord[tens.slice(0,1) + '0'] + numToWord[tens.slice(1)]);
        } else currStr += numToWord[sliced]; 
        currStr += place[placeInd++];
        result = currStr + result;
    } return result;
}
console.log(numToWords(19684325632));
module.exports = numToWords;
