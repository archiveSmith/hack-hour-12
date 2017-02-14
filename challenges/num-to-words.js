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

    const numWord = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teenWord = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tenWord = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num === 0) return 'Zero';

    let numArr = num.toString().split('');
    let word = '';
    
    function threeDigitWord(arr) {
      let len = arr.length;
      let output = numWord[arr[len - 1]];

      // 2nd to last digit
      if (arr[len - 2] > 0) {
        if (output === '') {
          output += teenWord[arr[len - 2]];
        } else if (arr[len - 2] === 1) {
          output = teenWord[arr[len -1]];
        } else {
          output = tenWord[arr[len - 2]] + output;
        }
        if (output === 'TenOne') output = 'Eleven';
      }
      
      // 3rd to last digit
      if (arr[len - 3] > 0) {
        output = numWord[arr[len - 3]] + 'Hundred' + output;
      }
      
      return output;
    }

    word = threeDigitWord(numArr);
    
    numArr.pop();
    numArr.pop();
    numArr.pop();
    
    if (numArr.length > 0 && threeDigitWord(numArr)) {
      word = threeDigitWord(numArr) + 'Thousand' + word;
    }
    
    numArr.pop();
    numArr.pop();
    numArr.pop();
    
    if (numArr.length > 0 && threeDigitWord(numArr)) {
      word = threeDigitWord(numArr) + 'Million' + word;
    }
    
    numArr.pop();
    numArr.pop();
    numArr.pop();
    
    if (numArr.length > 0 && threeDigitWord(numArr)) {
      word = threeDigitWord(numArr) + 'Billion' + word;
    }
    
    numArr.pop();
    numArr.pop();
    numArr.pop();
    
    if (numArr.length > 0 && threeDigitWord(numArr)) {
      word = threeDigitWord(numArr) + 'Trillion' + word;
    }

    if (numArr.length > 0) {
      word = threeDigitWord(numArr) + 'Quadrillion' + word;
    }

    return word;
}

module.exports = numToWords;


// var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
// var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

// function inWords (num) {
//     if ((num = num.toString()).length > 9) return 'overflow';
//     n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//     if (!n) return; var str = '';
//     str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
//     str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
//     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
//     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
//     str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
//     return str;
// }
