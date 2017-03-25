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
  function tokenize(hand) {
    const tokens = {};
    for (let i = 0; i < hand.length; i += 1) {
      if (tokens.hasOwnProperty(i)) {
        tokens[hand[i]] += 1;
      } else {
        tokens[hand[i]] = 1;
      }
    }
    return tokens;
  }
  const hand1token = tokenize(hand1);
  const hand2token = tokenize(hand2);

  // weight
  // four of a kind = 600 + card -> 614
  // full house three of a kind + one pair = 300 + 100 + high cards = 427
  // three of a kind = 300 + card -> 314
  // two pairs = 200 (pair) + 50 (double pairs) + high card of pair + high card -> 264
  // one pair = 100 (pair) + high card of pair + high card -> 214 + 13 -> 127
  // high card = 0 + high card -> 14

  function getWeight(handObj) {
    let weight = 0;
    const highCard = [];

    for (let card in handObj) {
      if (handObj[card] === 4) {
        weight += 600 + Number(card);
      }
      if (handObj[card] === 3) {
        weight += 300 + Number(card);
      }
      if (handObj[card] === 2) {
        weight += 100 + Number(card);
      }
      if (handObj[card] === 1) {
        highCard.push(Number(card));
      }
    }
    return weight + Number(Math.max(...highCard));
  }

  const player1 = getWeight(hand1token);
  const player2 = getWeight(hand2token);

  if (player1 === player2) return 'Draw';
  return player1 > player2 ? 'Player 1 wins' : 'Player 2 wins';
}

console.log(poker([3,5,5,5,2], [4,6,7,8,8]));

module.exports = poker;
