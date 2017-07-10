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

function getScore(hand) {
  // Generate an object to represent card frequency
  const cardCount = hand.reduce((a, c) => {
    a.hasOwnProperty(c) ? a[c] += 1 : a[c] = 1;
    return a;
  }, {})

  // Accumulate scores of card count frequency
  let score = 0;

  for (const card in cardCount) {
    switch (cardCount[card]) {
      case 4: score += 500; break;
      case 3: score += 300; break;
      case 2: score += 100; break;
      default: break;
    }
  }

  // straight
  hand.sort((a, b) => b - a);
  if (score === 0 && hand[0] - hand[4] === 4) score += 350;

  // add high card
  return score + hand[0];
};

function poker(hand1, hand2) {
  const player1 = getScore(hand1);
  const player2 = getScore(hand2);

  if (player1 === player2) return 'Draw';
  return player1 > player2 ? 'Player 1 wins' : 'Player 2 wins';
}

// player 1 wins
console.log(poker([3, 5, 5, 5, 2], [4, 6, 7, 8, 8]));
console.log(poker([3, 3, 5, 5, 11], [2, 2, 3, 3, 8]));
console.log(poker([4, 4, 4, 8, 8], [2, 3, 4, 5, 6]));
console.log(poker([3, 11, 4, 2, 5], [4, 6, 7, 8, 10]));
console.log(poker([3, 4, 5, 6, 7], [2, 3, 4, 6, 5]));

// player 2 wins
console.log(poker([4, 4, 8, 8, 8], [3, 5, 5, 5, 5]));
console.log(poker([2, 2, 3, 3, 8], [3, 3, 5, 5, 11]));
console.log(poker([2, 3, 4, 5, 6], [4, 4, 4, 8, 8]));
console.log(poker([4, 6, 7, 7, 7], [3, 4, 5, 6, 7]));
console.log(poker([4, 4, 7, 7, 7], [4, 4, 8, 8, 8]));

// draw!
console.log(poker([4, 4, 8, 8, 10], [3, 3, 5, 5, 10]));
console.log(poker([14, 14, 8, 8, 8], [14, 14, 5, 5, 5]));
console.log(poker([14, 2, 8, 8, 8], [14, 8, 5, 5, 5]));

module.exports = poker;
