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

// const poker = (hand1, hand2) => {
//   if (!Array.isArray(hand1) || !Array.isArray(hand2) || hand1.length !== 5 || hand2.length !== 5) {
//     return undefined;
//   }

//   const countCards = (hand) => {
//     const counts = hand.reduce((table, card) => {
//       table.hasOwnProperty(card) ? table[card]++ : table[card] = 1;
//       return table;
//     }, {});

//     return Object.values(counts).sort((a, b) => a < b);
//   };

//   const handRanker = (handCounts, hand) => {
//     const HAND_RANKS = {
//       highCard: 0,
//       pair: 1,
//       twoPair: 2,
//       threeKind: 3,
//       straight: 4,
//       fullHouse: 5,
//       fourKind: 6,
//     };

//     if (handCounts[0] === 4) return HAND_RANKS.fourKind;
//     if (handCounts[0] === 3) return handCounts[1] === 2 ? HAND_RANKS.fullHouse : HAND_RANKS.threeKind;
//     if (handCounts[0] === 2) return handCounts[1] === 2 ? HAND_RANKS.twoPair : HAND_RANKS.pair;

//     const handAscending = hand.slice().sort((a, b) => a > b);
//     for (let i = 0; i < handAscending.length - 1; i += 1) {
//       if (handAscending[i + 1] - handAscending[i] !== 1) return HAND_RANKS.highCard;
//     }

//     return HAND_RANKS.straight;
//   };

//   const checkWinner = (player1Rank, player2Rank, hand1, hand2) => {
//     if (player1Rank > player2Rank) return 'Player 1 wins';
//     if (player1Rank < player2Rank) return 'Player 2 wins';

//     const hand1High = Math.max(...hand1);
//     const hand2High = Math.max(...hand2);
//     if (hand1High > hand2High) return 'Player 1 wins';
//     if (hand1High < hand2High) return 'Player 2 wins';
//     return 'Draw';
//   };

//   const hand1CountsDescending = countCards(hand1);
//   const hand2CountsDescending = countCards(hand2);
//   const player1Rank = handRanker(hand1CountsDescending, hand1);
//   const player2Rank = handRanker(hand2CountsDescending, hand2);

//   return checkWinner(player1Rank, player2Rank, hand1, hand2);
// };
const poker = (hand1, hand2) => {
  if (!Array.isArray(hand1) || !Array.isArray(hand2) || hand1.length !== 5 || hand2.length !== 5) {
    return undefined;
  }

  /* Get counts of cards in descending order.
   * Input: {Array} - hand
   * Output: {Array}
   * Example: [10, 10, 3, 2, 3] -> [2, 2, 1]
   */
  const countCards = (hand) => {
    const counts = hand.reduce((table, card) => {
      table.hasOwnProperty(card) ? table[card]++ : table[card] = 1;
      return table;
    }, {});

    return Object.values(counts).sort((a, b) => a < b);
  };

  /* Get rank of each hand. Used later to check winner.
   * Input: {Array, Array} - handCounts, hand
   * Output: {Integer} - ranges from 0 to 6
   */
  const handRanker = (handCounts, hand) => {
    const HAND_RANKS = {
      highCard: 0,
      pair: 1,
      twoPair: 2,
      threeKind: 3,
      straight: 4,
      fullHouse: 5,
      fourKind: 6,
    };

    if (handCounts[0] === 4) return HAND_RANKS.fourKind;
    if (handCounts[0] === 3) return handCounts[1] === 2 ? HAND_RANKS.fullHouse : HAND_RANKS.threeKind;
    if (handCounts[0] === 2) return handCounts[1] === 2 ? HAND_RANKS.twoPair : HAND_RANKS.pair;

    const handAscending = hand.slice().sort((a, b) => a > b);
    for (let i = 0; i < handAscending.length - 1; i += 1) {
      if (handAscending[i + 1] - handAscending[i] !== 1) return HAND_RANKS.highCard;
    }

    return HAND_RANKS.straight;
  };

  /* Use rankings and high card to determine winner.
   * Input: {Integer, Integer, Array, Array} - player1Rank, player2Rank, hand1, hand2
   * Output: {String} - 'Player 1 wins', 'Player 2 wins' or 'DRAW'
   */
  const checkWinner = (player1Rank, player2Rank, hand1, hand2) => {
    if (player1Rank > player2Rank) return 'Player 1 wins';
    if (player1Rank < player2Rank) return 'Player 2 wins';

    const hand1High = Math.max(...hand1);
    const hand2High = Math.max(...hand2);
    if (hand1High > hand2High) return 'Player 1 wins';
    if (hand1High < hand2High) return 'Player 2 wins';
    return 'Draw';
  };

  const hand1CountsDescending = countCards(hand1);
  const hand2CountsDescending = countCards(hand2);
  const player1Rank = handRanker(hand1CountsDescending, hand1);
  const player2Rank = handRanker(hand2CountsDescending, hand2);

  return checkWinner(player1Rank, player2Rank, hand1, hand2);
};


module.exports = poker;
