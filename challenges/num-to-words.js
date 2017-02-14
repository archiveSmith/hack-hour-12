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
  if (!num) return undefined;
  if (num === 0) return 'Zero';
  
  const numStr = num.toString();
  const output = [];
  const hash = {0:'',1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine',
                10:'Ten',11:'Eleven',12:'Twelve',13:'Thirteen',14:'Fourteen',15:'Fifteen',16:'Sixteen',17:'Seventeen',18:'Eighteen',19:'Nineteen',
                20:'Twenty',30:'Thirty',40:'Forty',50:'Fifty',60:'Sixty',70:'Seventy',80:'Eighty',90:'Ninety',
              };
  const baseHash = {3:'Thousand', 6:'Million', 9:'Billion', 12:'Trillion', 15:'Quadrillion'};
  if (numStr.length <= 2 && num <= 20) return hash[numStr];

  revStr = numStr.split('').reverse().join('');
  console.log(revStr);
  
  for (let i = 0; i < revStr.length; i += 3) {
    let groupStr = '';
    if (revStr[i + 2] && revStr[i + 2] > 0) {
      groupStr += revStr[i + 2] + 'Hundred';
    }
    console.log(groupStr);
  }

}

console.log(numToWords(1987654021));

module.exports = numToWords;
