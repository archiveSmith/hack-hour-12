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
  if (!hand1 || !hand2 || hand1.length < 5 || hand2.length < 5) return "Bad Input";
  if (!hand1) return "Player 2 wins";
  if (!hand2) return "Player 1 wins";

  const hands = {
    highCard: 1,
    onePair: 2,
    twoPair: 3,
    threeOfAKind: 4,
    straight: 5,
    fullHouse: 6,
    fourOfAKind: 7,
  }

  function countHand(hand) {
    hand = hand.sort().reverse();
    const count = {};
    const countedHand = [];
    // get highest card
    countedHand['highCard'] = Math.max.apply(null, hand);

    // check for straight
    let hasStraight = true;
    for (let i = 1; i < 5; i += 1) {
      if ((hand[i - 1] - hand[i]) !== 1) hasStraight = false; 
    }
    if (hasStraight) countedHand['straight'] = true;

    // count cards
    for (let i = 0; i < 5; i += 1) {
      if (!count[hand[i]]) count[hand[i]] = 0;
      count[hand[i]] += 1;
    }

    //check for pairs and threes
    Object.keys(count).forEach(card => {
      if (count[card] === 4) countedHand['fourOfAKind'] = card;
      if (count[card] === 3) countedHand['threeOfAKind'] = card;
      if (count[card] === 2) {
        if (!countedHand['onePair']) countedHand['onePair'] = [];
        countedHand['onePair'].push(card);
      }
    });

    // check if there's anything besides highest Card
    if (!countedHand['fourOfAKind'] && !countedHand['threeOfAKind'] && !countedHand['onePair'] && !countedHand['straight']) {
      return countedHand;
    // check for full house
    } else if (countedHand['threeOfAKind'] && countedHand['onePair'] && countedHand['onePair'].length === 1) {
      countedHand['fullHouse'] = [countedHand['threeOfAKind'], countedHand['onePair']];
      delete countedHand['threeOfAKind'];
      delete countedHand['onePair'];
      // check for multiple pairs
    } else if (countedHand['onePair'] && countedHand['onePair'].length === 2) {
      countedHand['twoPair'] = countedHand['onePair'];
      delete countedHand['onePair'];
    }
  

    console.log(countedHand);

    return countedHand;
  }

  countHand(hand1);
  countHand(hand2);
}

console.log(poker([3,5,5,5,2],[5,5,7,8,9]));

module.exports = poker;
