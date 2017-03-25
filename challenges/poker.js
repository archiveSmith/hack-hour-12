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
  const hand1Map = {};
  const hand2Map = {};

  function mappingHands(cards, store) {
    cards.forEach((card) => {
      if (!store.hasOwnProperty(card)) {
        store[card] = 1;
      } else {
        store[card] += 1;
      }
    });
  }

  mappingHands(hand1, hand1Map);
  mappingHands(hand2, hand2Map);

  function fourOfAKind(cardsMap) {
    const values = Object.values(cardsMap);
    for (let i = 0; i < values.length; i++) {
      if (values[i] === 4) {
        return 100;
      }
    }
    return -1;
  }

  function fullHouse(cardsMap) {
    const values = Object.values(cardsMap);
    let three = false;
    let double = false;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === 2) double = true;
      if (values[i] === 3) three = true;
    }
    if (three && double) return 99;
    return -1;
  }
  
  function straight(cardsMap) {
    const values = Object.values(cardsMap);
    values.sort();
    if (values[4] === values[3] + 1 && values[3] == values[2] + 1 && values[2] == values [1] + 1 && values[1] === values[0] + 1) {
      return 98;
    }
    return -1;
  }
  
  function threeOfAKind(cardsMap) {
    const values = Object.values(cardsMap);
    let three = false;
    let one = false;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === 3) three = true;
      if (values[i] === 1) one = true;
    }
    if (three && one) return 97;
    return -1;
  }
  
  function twoPairs(cardsMap) {
    const values = Object.values(cardsMap);
    let one = false;
    let two = false;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === 2) {
        one = true;
        continue;
      }
      if (values[i] === 2) two = true;
    }
    if (one && two) return 96;
    return -1;
  }

  function onePair(cardsMap) {
    const values = Object.values(cardsMap);
    let one = false;
    let other = false;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === 2) {
        one = true;
        continue;
      }
      if (values[i] !== 1) other = true;
    }
    if (one === true && other === false) return 95;
    return -1;    
  }

  function highCard(cardsMap) {
    const values = Object.values(cardsMap);
    values.sort().reverse();
    return values[0];
  }

  function getHandScore(cardsMap) {
    let r = fourOfAKind(cardsMap);
    if (r !== -1) return r;
    r = fullHouse(cardsMap);
    if (r !== -1) return r;
    r = straight(cardsMap);
    if (r !== -1) return r;
    r = threeOfAKind(cardsMap);
    if (r !== -1) return r;
    r = twoPairs(cardsMap);
    if (r !== -1) return r;
    r = onePair(cardsMap);
    if (r !== -1) return r;
    r = highCard(cardsMap);
    if (r !== -1) return r;
  }

  const player1 = getHandScore(hand1Map);
  const player2 = getHandScore(hand2Map);

  if (player1 === player2) return "Draw";
  if (player1 < player2) return "Player 2 wins";
  if (player1 > player2) return "Player 1 wins";
}

console.log(poker([2,5,5,5,2], [4,6,7,8,8]));


module.exports = poker;
