// Write a function that takes a number as an argument and returns its english 
// word representation as a string. Answers should be in upper camel case (a.k.a. 
// Pascal case). Don't worry about spaces.
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
  if (!num) return num;
  if (num < 0) return 'stop it dude';
  
  let answerArr = [];
  let numIndex;
  let i;
  const smallNumArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  const tensArr = [2, 3, 4, 5, 6, 7, 8, 9];
  //  100, 1000, 1000000, 1000000000, 1000000000000, 1000000000000000];
  const smallWordsArr = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tensArr = ['Twenty', 'Thirty', 'Fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let tables = ['', '', 'hundred', 'thousand', 'thousand', 'thousand', 'million', 'million', 'million', 'billion', 'billion', 'billion', 'trillion', 'trillion', 'trillion', 'quadrillion'];

  if (num < 20) {
    numIndex = smallNumArr.indexOf(num);
    return smallWordsArr[numIndex];
  }
  

  let numArr = num.toString(10).split("").map(function(t){return parseInt(t)});
  let len = numArr.length;
  
  if (len === 2) {
    let tenner = tensArr.indexOf(numArr[0]);
    answerArr.push(tensArr[tenner]);
    let single = smallNumArr.indexOf(numArr[1]);
    answerArr.push(smallWordsArr[single]);
    return answerArr.join('');
  }


  for (i = 0; i < numArr.length; i += 1) {
    if (i === 1 || (i - 1) % 3 === 0) {
      let tenner = tensArr.indexOf(numArr[i]);
      answerArr.push(tensArr[tenner]);
    }
  }


}

module.exports = numToWords;
