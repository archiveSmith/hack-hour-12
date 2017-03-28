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
  if (!Array.isArray(hand1) || !Array.isArray(hand2) || hand1.length !== 5 || hand2.length !== 5) {
    return undefined;
  }

  const countCards = hand => hand.reduce((table, card) => {
    table.hasOwnProperty(card) ? table[card]++ : table[card] = 1;
    return table;
  }, {});

  const handRanker = (handCounts, hand) => {
    const HAND_RANKS = {
      highCards: 0,
      pair: 2,
      twoPair: 3,
      threeKind: 4,
      straight: 5,
      fullHouse: 6,
      fourKind: 7,
    };

    if (handCounts[0] === 4) return HAND_RANKS.fourKind;
    if (handCounts[0] === 3) return handCounts[1] === 2 ? HAND_RANKS.fullHouse : HAND_RANKS.threeKind;
    if (handCounts[0] === 2) return handCounts[1] === 2 ? HAND_RANKS.twoPair : HAND_RANKS.pair;

    const handAscending = hand.slice().sort((a, b) => a - b);
    for (let i = 0; i < hand.length - 1; i += 1) {
      if (hand[i + 1] - hand[i] !== 1) return HAND_RANKS.highCards;
    }
  };

  const checkWinner = (player1Rank, player2Rank, hand1, hand2) => {
    if (player1Rank > player2Rank) return 'Player 1 wins';
    if (player2Rank > player1Rank) return 'Player 2 wins';

    const hand1High = Math.max(...hand1);
    const hand2High = Math.max(...hand2);

    if (hand1High > hand2High) return 'Player 1 wins';
    if (hand2High > hand1High) return 'Player 2 wins';
    return 'DRAW';
  };

  const hand1CountsDescending = countCards(hand1);
  const hand2CountsDescending = countCards(hand2);
  const player1Rank = handRanker(hand1CountsDescending, hand1);
  const player2Rank = handRanker(hand2CountsDescending, hand2);
  return checkWinner(player1Rank, player2Rank, hand1, hand2);
}

module.exports = poker;
