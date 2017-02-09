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
  
  const numStr = num.toString();
  const output = [];
  const hash = { 0:'Zero',1:'One',2:'Two',3:'Three',4:'Four',5:'Five',6:'Six',7:'Seven',8:'Eight',9:'Nine',
                10:'Ten',11:'Eleven',12:'Twelve',13:'Thirteen',14:'Fourteen',15:'Fifteen',16:'Sixteen',17:'Seventeen',18:'Eighteen',19:'Nineteen',
                20:'Twenty',30:'Thirty',40:'Forty',50:'Fifty',60:'Sixty',70:'Seventy',80:'Eighty',90:'Ninety',
              };
  const baseHash = {3:'Thousand', 6:'Million', 9:'Billion', 12:'Trillion', 15:'Quadrillion'};
  if (numStr.length === 1) return hash[numStr];

  let counter;
  let i;
  let current;
  for (i = numStr.length - 1, counter = 0; i >= 0; i -= 1, counter += 1) {
    if (counter % 3 === 0) {
      if (i > 0) {
        if (numStr[i - 1] < 2) {
          current = hash[`${numStr[i - 1]}${numStr[i]}`];
        } else {
          current = `${hash[numStr[i - 1] * 10]}${hash[numStr[i]]}`;
        }
        if (baseHash.hasOwnProperty(counter)) {
          current += baseHash[counter];
        }
        output.push(current);
        i -= 1;
        counter += 1;
      }
    } else if (counter % 3 === 2) {
      current = hash[numStr[i]];
      output.push(`${current}Hundred`);
    }
  }
  return output.reverse().join('');
}

// console.log(numToWords(987654321));

module.exports = numToWords;
