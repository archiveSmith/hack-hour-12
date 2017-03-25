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
  let sortedHand1 = hand1.sort(function(a, b){ return b-a });
  let sortedHand2 = hand2.sort(function(a, b){ return b-a });
  let handScore1;
  let handScore2;
  let straight1 = true;
  let straight2 = true;

  for (let i = 0; i < 4; i += 1) {
    if (sortedHand1[i] !== sortedHand1[i + 1] - 1) straight1 = false;
    if (sortedHand2[i] !== sortedHand2[i + 1] - 1) straight2 = false;
  }
  if (straight1) handScore1 = 5;
  if (straight2) handScore2 = 5;
  if (straight1 && straight2) {
    return sortedHand1[0] > sortedHand2[0] ? 'Player 1 wins' : 'Player 2 wins';
  }

  let handObj1 = hand1.reduce((curr, next) => {
    if (curr[next]) curr[next] += 1;
    else curr[next] = 1;
    return curr;
  }, {});
  let handObj2 = hand2.reduce((curr, next) => {
    if (curr[next]) curr[next] += 1;
    else curr[next] = 1;
    return curr;
  }, {});

  if (straight1 && !straight2) {
    if (handObj2[0] === 4) return 'Player 2 wins';
    else if (handObj2[0] === 3 && handObj2[1] === 2) return 'Player 2 wins';
    else return 'Player 1 wins';
  }
  if (straight2 && !straight1) {
    if (handObj1[0] === 4) return 'Player 1 wins';
    else if (handObj1[0] === 3 && handObj1[1] === 2) return 'Player 1 wins';
    else return 'Player 2 wins';
  }

  let sortedHandKeys1 = Object.keys(handObj1);
  let sortedHandValues1 = [];
  let sortedHandKeys2 = Object.keys(handObj2);
  let sortedHandValues2 = [];
  for (let i = 0; i < sortedHandKeys1.length; i += 1) sortedHandValues1.push(handObj1[sortedHandKeys1[i]]);
  for (let i = 0; i < sortedHandKeys2.length; i += 1) sortedHandValues2.push(handObj2[sortedHandKeys2[i]]);
  sortedHandValues1.sort(function(a, b){ return b-a });
  sortedHandValues2.sort(function(a, b){ return b-a });
  console.log(sortedHandValues1, sortedHandValues2);
  if (sortedHandValues1[0] !== sortedHandValues2[0]) {
    return sortedHandValues1[0] > sortedHandValues2[0] ? 'Player 1 wins' : 'Player 2 wins';
  } else {
    if (sortedHandValues1[1] !== sortedHandValues2[1]) {
      return sortedHandValues1[1] > sortedHandValues2[1] ? 'Player 1 wins' : 'Player 2 wins';
    }
  }
  for (let i = 0; i < 5; i += 1) {
    if (sortedHand1[i] > sortedHand2[i]) return 'Player 1 wins';
    if (sortedHand2[i] > sortedHand1[i]) return 'Player 2 wins';
  }


  

}

console.log(poker([3,4,5,5,2], [4,6,7,8,8]))

module.exports = poker;
