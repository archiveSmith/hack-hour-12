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
// function convertLessThan1000(num) {
//     // edge case: 0 return zero
//     if (num == 0) return ""

//     var convertSingle = {
//         0: "",
//         1: "One",
//         2: "Two",
//         3: "Three",
//         4: "Four",
//         5: "Five",
//         6: "Six",
//         7: "Seven",
//         8: "Eight",
//         9: "Nine"
//     }

//     var convertTenth = {
//         1: "Ten",
//         2: "Twenty",
//         3: "Thirty",
//         4: "Forty",
//         5: "Fifty",
//         6: "Sixty",
//         7: "Seventy",
//         8: "Eighty",
//         9: "Ninty"
//     }

//     var convertTen = {
//         11 : 'Eleven',
//         12 : 'Twelve',
//         13 : 'Thirteen',
//         14 : 'Fourteen',
//         15 : 'Fifteen',
//         16 : 'Sixteen',
//         17 : 'Seventeen',
//         18 : 'Eighteen',
//         19 : 'Nineteen'
//     }

//     let lastTwoNumber = (num % 100);
//     let hunDred = (num - lastTwoNumber) / 100;
//     let lastTwo = "";

//     if (Object.keys(convertTen).indexOf(lastTwoNumber.toString()) > -1) {
//         lastTwo = convertTen[lastTwoNumber];
//     } else {
//         let lastNum  = lastTwoNumber % 10;
//         let lastTwoTenth  = (lastTwoNumber - lastNum) / 10;

//         if (lastTwoTenth !== 0) {
//             lastTwo = convertTenth[lastTwoTenth.toString()] + "" + convertSingle[lastNum]
//         } else {
//             lastTwo = convertSingle[lastNum];
//         }
        
//     }

//     if (hunDred == 0) {
//         return lastTwo
//     } else {
//         return convertSingle[hunDred.toString()] + "Hundred" + lastTwo;
//     }
// }

function numToWords(num) {
    if (num == 0) return "Zero";

        function convertLessThan1000(num) {
        // edge case: 0 return zero
        if (num == 0) return ""

        var convertSingle = {
            0: "",
            1: "One",
            2: "Two",
            3: "Three",
            4: "Four",
            5: "Five",
            6: "Six",
            7: "Seven",
            8: "Eight",
            9: "Nine"
        }

        var convertTenth = {
            1: "Ten",
            2: "Twenty",
            3: "Thirty",
            4: "Forty",
            5: "Fifty",
            6: "Sixty",
            7: "Seventy",
            8: "Eighty",
            9: "Ninty"
        }

        var convertTen = {
            11 : 'Eleven',
            12 : 'Twelve',
            13 : 'Thirteen',
            14 : 'Fourteen',
            15 : 'Fifteen',
            16 : 'Sixteen',
            17 : 'Seventeen',
            18 : 'Eighteen',
            19 : 'Nineteen'
        }

        let lastTwoNumber = (num % 100);
        let hunDred = (num - lastTwoNumber) / 100;
        let lastTwo = "";

        if (Object.keys(convertTen).indexOf(lastTwoNumber.toString()) > -1) {
            lastTwo = convertTen[lastTwoNumber];
        } else {
            let lastNum  = lastTwoNumber % 10;
            let lastTwoTenth  = (lastTwoNumber - lastNum) / 10;

            if (lastTwoTenth !== 0) {
                lastTwo = convertTenth[lastTwoTenth.toString()] + "" + convertSingle[lastNum]
            } else {
                lastTwo = convertSingle[lastNum];
            }
            
        }

        if (hunDred == 0) {
            return lastTwo
        } else {
            return convertSingle[hunDred.toString()] + "Hundred" + lastTwo;
        }
    }

    var arr = [];

    var convert = ["Quintillion","Quadrillion","Trillion","Billion","Million","Thousand",""];
    var result = ""
    

    for (let i = 6; i >= 0; i--) {
        let temp = num % 1000
        if (temp !== 0) {
            arr.push(convertLessThan1000(temp) + convert[i]);
        }
        num = (num - temp)/1000
    }

    return arr.reverse().join('');
}

console.log(numToWords(20))
console.log(numToWords(2999))
console.log(numToWords(300525151340440))
console.log(numToWords(92120000000000000))

module.exports = numToWords;
