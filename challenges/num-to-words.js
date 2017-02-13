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
 * numToWords(92,120,000,000,000,000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  const words = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    16: 'Sixteen',
    17: 'Seventeen',
    18: 'Eighteen',
    19: 'Nineteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
  }
  const word = [];


























  /////////////////////////////////////////////////

  let sortedKeys = Object.keys(words).sort((l,h) => ( h - l)).map(key => Number(key));

  function underOneHundred(val) {
    if (val === 0) return;
    if (val >= 90) {
      word.push(words[90])
      let rem = val % 10;
      underOneHundred(rem);
    }

    for (let l = 1, h = 0; h < sortedKeys.length; l++, h++) {
      let low = sortedKeys[l];
      let high = sortedKeys[h];
      if(val >= low && val < high) {
        word.push(words[low]);
        val -= l;
        underOneHundred(val);
      }
    }
  }

  let quad = num / 1000000000000000
  if(quad) {
    num -= quad * 1000000000000000;
    console.log(quad);
    underOneHundred(quad);
    word.push('Quadrillion');
  }

  return word;

  let tril = quad ? quad / 1000000000000000 : num / 1000000000000;
  let bill = tril ? tril / 1000000000000 :    num / 1000000000;
  let mill = bill ? bill / 1000000000 :       num / 1000000;
  let thou = mill ? mill / 1000  :            num / 1000;
  let hund = thou ? thou / 100 :              num / 100;


}

console.log(numToWords(52000000000000000));

module.exports = numToWords;
