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
  if (!num) return undefined;
  
  let output = '';
  const numStr = num.toString();
  const groupStrArr = [];
  const hash = {0:'',1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine',
                10:'Ten',11:'Eleven',12:'Twelve',13:'Thirteen',14:'Fourteen',15:'Fifteen',16:'Sixteen',17:'Seventeen',18:'Eighteen',19:'Nineteen',
                20:'Twenty',30:'Thirty',40:'Forty',50:'Fifty',60:'Sixty',70:'Seventy',80:'Eighty',90:'Ninety',
              };
  const baseHash = {3:'Thousand', 6:'Million', 9:'Billion', 12:'Trillion', 15:'Quadrillion'};
  if (numStr.length <= 2 && num <= 20) return hash[numStr];

  let counter;
  for (let i = numStr.length - 1, counter = 0; i >= 0; i -= 3, counter += 3) {
    let groupStr = '';
    let hasValues = false;
    let gotSingles = false;
    
    // extract hundreds
    if (numStr[i - 2] && numStr[i - 2] > 0) {
      groupStr += hash[numStr[i - 2]] + 'Hundred';
      hasValues = true;
    }
    // extract tens
    // everything 1 - 19
    if (numStr[i - 1] && numStr[i - 1] < 2 && numStr[i - 1] > 0) {
      groupStr += hash[(numStr[i - 1]) + numStr[i]];
      gotSingles = hasValues = true;
    // everything 20 - 90
    } else if (numStr[i - 1] && numStr[i - 1] >= 2) {
      groupStr += hash[numStr[i - 1] * 10];
      hasValues = true;
    }
    // extract singles
    if (!gotSingles && numStr[i] && numStr[i] > 0) {
      groupStr += hash[numStr[i]];
      gotSingles = hasValues = true;
    }
    // add thousands, millions, ...
    if (hasValues && counter > 1) {
      groupStr += baseHash[counter];
    }
    groupStrArr.push(groupStr);
  }
  groupStrArr.reverse().forEach((el) => {
    output += el;
  });
  
  return output;
}

console.log(numToWords(10000000000));

module.exports = numToWords;
