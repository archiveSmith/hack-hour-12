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

const numbers = {
  '0': 'Zero',
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
};

const tens = {
  '1': 'Ten',
  '2': 'Twenty',
  '3': 'Thirty',
  '4': 'Forty',
  '5': 'Fifty',
  '6': 'Sixty',
  '7': 'Seventy',
  '8': 'Eighty',
  '9': 'Ninety',
};

const places = {
  '0': '',
  '1': '',
  '2': 'Hundred',
  '3': 'Thousand',
  '4': 'Thousand',
};

function numToWords(num) {
  let str = String(num);
  const length = str.length;

  if (length === 2) {
    // teen
    if (str[0] === '1') return numbers[str];

    // 20-99
    if (str[1] === '0') return tens[str[0]];
    return tens[str[0]] + numbers[str[1]];
  }

  if (length < 3) {
    return numbers[str];
  }

  let result = '';

  for (let i = length - 1, j = 0; i >= 0; i--, j++) {
    // ten thousand
    if (i === 4) {
      if (str[j+1] === '0') result += tens[str[j]] + places[i];
      else result += tens[str[j]];
    }
    else if (i === 1) {
      result += tens[(str[j])];
    } else {
      result += numbers[str[j]] + places[i];
    }
  }

  return result;
}

// console.log(numToWords(0));
// console.log(numToWords(15));
// console.log(numToWords(2999));
// console.log(numToWords(40));
// console.log(numToWords(31692));

module.exports = numToWords;
