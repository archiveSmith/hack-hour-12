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

// 9 = billion
// 12 = trillion
// 15 = quadrillion
// 15,000,000
// start from the top. check the length. if between 12-14, we know it's trillion... 
function numToWords(num) {
    if(num === 0) {
        return 'Zero';
    }
    // 1,000 length 4 = One Thousand
    // 10,000 length 5 = Ten Thousand
    // 100,000 = length 6 One Hundred thousand
    // 100,000,000 = length 9 One Hundred Million
    // 100,000,000,000 = length 12 One Hundred Billion
    // 100,000,000,000,000 = length 15 One Hundred Quadrillion
    // What's the pattern?
    // different right before the ,
    // after the comma, it resets
    let length = num.toString().length;
    let one = 'One';
    let two = 'Two';
    let three = 'Three';
    let four = 'Four';
    let five = 'Five';
    let six = 'Six';
    let seven = 'Seven';
    let eight = 'Eight';
    let nine = 'Nine';
    let eleven = 'Eleven';
    let twelve = 'Twelve';
    let thirteen = 'Thirteen';
    let fourteen = 'Fourteen';
    let fifteen = 'Fifteen';
    let sixteen = 'Sixteen';
    let seventeen = 'Seventeen';
    let eighteen = 'Eighteen';
    let nineteen = 'Nineteen';
    let twenty = 'Twenty';
    let thirty = 'Thirty';
    let fourty = 'Fourty';
    let fifty = 'Fifty';
    let sixty = 'Sixty';
    let seventy = 'Seventy';
    let eighty = 'Eighty';
    let ninty = 'Ninty'
    let hundred = 'Hundred';
    let thousand = 'Thousand';
    let million = 'Million';
    let billion = 'Billion';
    let trillion = 'Trillion';
    let quadrillion = 'Quadrillion';

    let result = "";

    for(let i = num.toString().length; i > 0; i--) {
        if(i === 1) {
            switcher(num);
        }
        if(i === 2) {
            
        }

    }

    function switcher(num) {
        switch(num) {
            case(0):
                break;
            case(1):
                result += one;
                return;
            case(2):
                result += two;
                return;
            case(3):
                result += three
                return;
            case(4):
                result += four;
                return;
            case(5):
                result += five;
                return;
            case(6):
                result += six;
                return;
            case(7):
                result += seven;
                return;
            case(8):
                result += eight;
                return;
            case(9):
                result += nine;
                return;
        }
    }

    return result;

}

console.log(numToWords(11));

module.exports = numToWords;
