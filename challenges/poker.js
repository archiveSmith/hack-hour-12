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
  //can set up a ranking order
  function pairs (hand) {
      //want to keep track of the pair values
      //also want to keep track of the amount of pairs;
      hand.sort((a,b) => b-a);
      let countPairs = 0;
      let threeOfAKind = 0;
      let fourOfAKind = 0; 
      let valueOfPairs = [];
      let valueOfThree = 0;
      let valueOfFour = 0;
      hand.forEach((item,index) => {
        if (hand.slice(index+1).indexOf(item) !== -1) {
          if (valueOfPairs.indexOf(item) !== -1) {
            if(threeOfAKind === 0) {
              countPairs--;
              valueOfPairs.splice(valueOfPairs.indexOf(item),1);
              valueOfThree = item;
              threeOfAKind++;
            }
          }
          else if (item === valueOfThree) {
            threeOfAKind--;
            fourOfAKind++;
            valueOfFour = item;
          }
          else {
            valueOfPairs.push(item);
            countPairs++;
          }
        }
      })
    function straight(arr) {
      //need to account for Aces wrapping
      arr.sort((a,b) => a-b);
      if(arr[0] === 14 && arr[1] === 2 && arr[2] === 3 && arr[3] === 4 && arr[4] === 5) return true;
      for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] !== (arr[i+1] -1)) return false;
      }
      return true;
    }
      if (fourOfAKind === 1) return [6, valueOfFour];
      else if (threeOfAKind === 1 && countPairs ===1) return [5, valueOfThree];
      else if (straight(hand) === true) return [4, hand[0] === 14 && hand[1] === 2 ? 5 : hand[0]];
      else if (threeOfAKind === 1) return [3, valueOfThree];
      else if (countPairs === 2) {
        return [2, Math.max(valueOfPairs[0], valueOfPairs[1]), Math.min(valueOfPairs[0], valueOfPairs[1])];
      }
      else if (countPairs === 1) return [1, valueOfPairs[0]];
      else return [0, hand[0]];
  }
  let rank1 = pairs(hand1);
  let rank2 = pairs(hand2);
  if (rank1[0] > rank2[0]) return "Player 1 wins";
  if (rank2[0] > rank1[0]) return "Player 2 wins";
  if (rank1[0] === rank2[0]) {
    if(rank1[0] !== 2) {
      if(rank1[1] > rank2[1]) return "Player 1 wins";
      else if (rank1[1] < rank2[1]) return "Player 2 wins";
      else return "Draw";
    }
    else { //two pair;
      if (rank1[1] > rank2[1]) return "Player 1 wins";
      else if (rank2[1] > rank1[1]) return "Player 2 wins";
      else { //same;
        if (rank1[2] > rank2[2]) return "Player 1 wins";
        else if (rank2[2] > rank1[2]) return "Player 2 wins";
        else { //same need highcard;
          hand1.sort((a,b) => b-a);
          hand2.sort((a,b) => b-a);
          for (let i = 0; i < hand1.length; i++) {
            if (hand1[i] > hand2[i]) return "Player 1 wins" 
            if (hand2[i] > hand1[i]) return "Player 2 wins";
          }
          return "Draw" //shoulda done this check at the beginning;
        }
      }
    }
  }
}

let test1 = [10,11,12,13,14];
let test2 = [2,3,6,5,4];
console.log(poker(test1, test2));

module.exports = poker;
