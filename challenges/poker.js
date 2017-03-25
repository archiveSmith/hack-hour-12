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

// function createHand() {
//   const hand = [];
//
//   for (let i = 0; i < 5; i += 1) {
//     hand.push((~~(Math.random() * 13) + 2));
//   }
//
//   return hand;
// }
//
// const hand1 = createHand();
// const hand2 = createHand();

function poker(hand1, hand2) {
  console.log(hand1);
  console.log(hand2);

  function findHandStrength(array) {
    const compObj = {};

    array.forEach((card) => {
      if (compObj.hasOwnProperty(card)) {
        // console.log('true')
        compObj[card] += 1;
      }
      else compObj[card] = 1;
    });

    console.log(compObj);
    // high card 2-14
    // pair card val * 10
    // 3-of-a-kind val * 100
    // straight val * 1000
    // full house val * 10000
    // 4-of-a-kind val * 100000
    // const compArr = Object.keys(compObj).sort((a, b) => a - b);
    // console.log(compArr)
    let result = 0;
    for (let key in compObj) {
      if (compObj[key] === 4) {
        result = key * 1000000;
      }
      if (compObj[key] === 3) {
        result = key * 100;
      }
      if (compObj[key] === 2) {
        if (key * 10 > result) result = key * 10;
      }
      if (compObj[key] === 1) {
        if (key > result) result = key;
      }
    }
    if (result > 140) {
      console.log('FULL HOUSE!!!')
      for (let key in compObj) {
        if (compObj[key] === 2) result *= 1000
      }
    }
    if (result === 0) {
      console.log('STRAIGHT!!!')
      const compArr = Object.keys(compObj).sort((a, b) => a - b);
      console.log(compArr)
      if (compArr[4] - compArr[0] === 4) result = compArr[4] * 1000;
    }

    console.log(result)
    return result;
  }

  // console.log(findHandStrength(hand2))
  return findHandStrength(hand1) > findHandStrength(hand2) ? "Player 1 wins" : "Player 2 wins";
}

module.exports = poker;
