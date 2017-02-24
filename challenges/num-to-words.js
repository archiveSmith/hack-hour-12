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

  if (num === 0) return 'Zero';
  
  // creating arrays of possible num words
  let below20 = ['', 'One', 'Two', 'Three',
    'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Eleven',
    'Twelve', 'Thirteen', 'Fourteen',
    'Fifteen', 'Sixteen', 'Seventeen',
    'Eighteen', 'Nineteen'];
  let below100 = ['', '', 'Twenty', 'Thirty',
    'Fourty', 'Fifty', 'Sixty', 'Seventy',
    'Eighty', 'Ninety'];
  let greater = ['', 'Thousand', 'Million',
    'Billion', 'Trillion', 'Quadrillion'];


  let nums = [];
  let numString = num.toString();
  console.log('Original Numstring: ', numString);
  
  // adding 0's to the first Number
  // eg 2 becomes 002
  while (numString.length % 3 !== 0) {
    numString = '0' + numString;
  }
  console.log('NUMSTRING with starting zeroes added: ', numString);
  
  // adding strings of numbers to num arrays
  // eg 002999 becomes ['002', '999']
  for (let i = 0; i < numString.length; i += 3) {
    let toAdd = numString[i] + numString[i + 1] + numString[i + 2];
    nums.push(toAdd);
  }
  console.log('NUMS', nums);
  
  
  let finalString = '';
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (j === 0 && nums[i][j] !== '0') {
        // adding whatever is in the hundreds place to the final string
        // eg in '999' it is going to add NineHundred
        console.log('\n', 'ADDING HUNDRED')
        console.log(below20[nums[i][j]])
        finalString += below20[nums[i][j]];
        finalString += 'Hundred';
      } else if (j === 1 && nums[i][j] !== '0') {
        // adding whatever is in the 10s place to the final string
        // eg in '999' it adds Ninety
        // remember those empty strings in our hard coded arrays
        // if the number starts with a 1 it will add an empty string
        console.log('\n', 'ADDING TENS');
        console.log(below100[nums[i][j]]);
        finalString += below100[nums[i][j]];
      } else if (j === 2 && nums[i][j] !== '0') {
        // adding whatever is in the ones place to the final string
        // eg '999' will add Nine
        if (nums[i][j - 1] !== '1') {
          // if the tens value was not a teen just add the Number
          // eg '025' will add Five
          console.log('\n', 'ADDING 1S')
          console.log(below20[nums[i][j]]);
          finalString += below20[nums[i][j]];
        } else {
          // if the tens value was a teen we will add 10 to the selection
          // eg '015' will add 'Fifteen'
          console.log('\n', 'ADDING TEENS')
          console.log(below20[Number(nums[i][j]) + 10]);
          finalString += below20[Number(nums[i][j]) + 10];
        }
      }
    }
    
    // outside of inner for loop
    // just finished going through '002'
    // so adding the neccesary suffix for '002'
    console.log('ADDING THOUSANDS MILLIONS ETC');
    greater[nums.length - 1 - i] ? console.log(greater[nums.length - 1 - i]) : console.log('no suffix');
    finalString += greater[nums.length - 1 - i];
    console.log('final String: ', finalString);
  }
  return finalString;
}


function numToWordsAlternate(num) {

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
