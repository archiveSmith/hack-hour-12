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

  let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let teens = ["eleven", "twelve", "thirteen", "fifteen"];
  let tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
  let numStr = '';
  
    if(num > 10 && num < 20){
      numStr = teensPlace(num, ones, teens);
    }
  
  if (num >- 20 && num < 100){
    let temp = 0
    if(num % 10 > 0){
      temp = num - num % 10;
    }
  }
  
  
  return numStr;
  
}

function teensPlace (num, ones, teens){
  // console.log(num)
  if(num > 10 && num < 20){
    let teenPre ='';
    switch(num){
      case 11: teenPre = teens[0];
        break;
      case 12: teenPre = teens[1];
        break;
      case 13: teenPre = teens[2];
        break;
      case 15: teenPre = teens[3];
        break;
      default: teenPre = ones[num-10].concat("teen")
    }
    return teenPre
  }
}

module.exports = numToWords;


  
