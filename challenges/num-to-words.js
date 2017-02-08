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

  const ONE_TO_NINETEEN = [
    'One', 'Two', 'Three', 'Four', 'Five',
    'Six', 'Seven', 'Eight', 'Eine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
    'Sixteen', 'Seventeen', 'Eighteen', 'Eineteen'
  ];

  const TENS = [
    'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty',
    'Sixty', 'Seventy', 'Eighty', 'Ninety'
  ];

  const SCALES = ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

  // helper function for use with Array.filter
  function isTruthy(item) {
    return !!item;
  }

  // convert a number into 'chunks' of 0-999
  function chunk(number) {
    const thousands = [];

    while(number > 0) {
      thousands.push(number % 1000);
      number = Math.floor(number / 1000);
    }

    return thousands;
  }

  // translate a number from 1-999 into English
  function inEnglish(number) {
    let thousands, hundreds, tens, ones, words = [];

    if (number < 20) {
      return ONE_TO_NINETEEN[number - 1]; // may be undefined
    }

    if (number < 100) {
      ones = number % 10;
      tens = number / 10 | 0; // equivalent to Math.floor(number / 10)

      words.push(TENS[tens - 1]);
      words.push(inEnglish(ones));

      return words.filter(isTruthy).join('');
    }

    hundreds = number / 100 | 0;
    words.push(inEnglish(hundreds));
    words.push('hundred');
    words.push(inEnglish(number % 100));

    return words.filter(isTruthy).join('');
  }

  // append the word for a scale. Made for use with Array.map
  function appendScale(chunk, exp) {
    let scale;
    if (!chunk) {
      return null;
    }
    scale = SCALES[exp - 1];
    return [chunk, scale].filter(isTruthy).join('');
  }

  return chunk(num)
  .map(inEnglish)
  .map(appendScale)
  .filter(isTruthy)
  .reverse()
  .join('');
}

module.exports = numToWords;
