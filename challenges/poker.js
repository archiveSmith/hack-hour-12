/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/

function poker(hand1, hand2) {

  function cardRank(arr) {
    // define a variable that let us see if it a 4 kind(3) or just 1 pair(1)
    let cardTrackingObj = {};
    
    for (let i = 0; i < arr.length; i++) {
      if (!cardTrackingObj.hasOwnProperty(arr[i])) {
        cardTrackingObj[arr[i]] = 1;
      } else {
        cardTrackingObj[arr[i]] += 1;
      }
    }

    // check if the arr is straight or no
    let straight = null;
    if ((Math.max(arr) - Math.min(arr)) === 4) {
      straight = true;
    }

    // 3 value type point and highcard point ( equal to the value of the highest repeated car or )
    let typePoint = 0;
    let highestValueAndRepeatedCard;

    const cardNumber = Object.keys(cardTrackingObj).length;
    const highestAppearingCount = Object.keys(cardTrackingObj).reduce( (highestCount, card) => {
      if (highestCount <= Number(cardTrackingObj[card])) {
        if (!highestValueAndRepeatedCard || highestValueAndRepeatedCard < card) {
          highestValueAndRepeatedCard = Number(card);
        }
        return Number(cardTrackingObj[card]);
      }
      return highestCount;
    }, 1)

    if (highestAppearingCount === 2) typePoint = 300;
    if (highestAppearingCount === 2 && cardNumber === 4) typePoint = 200;
    if (highestAppearingCount === 3) typePoint = 400;
    if (straight) typePoint = 500;
    if (highestAppearingCount === 3 && cardNumber === 2) typePoint = 600;
    if (highestAppearingCount === 4) typePoint = 700;

    // console.log(typePoint)

    return typePoint + highestValueAndRepeatedCard;
  }

  if (cardRank(hand1) >  cardRank(hand2)) {
    return "Player 1 wins";
  } else if (cardRank(hand2) >  cardRank(hand1)) {
    return "Player 2 wins";
  } else {
    return "Draw";
  }
  // return cardRank(hand1);
}

// let result  = poker([8,5,6,9,7], [4,6,8,8,8]);
// console.log(result);
module.exports = poker;
