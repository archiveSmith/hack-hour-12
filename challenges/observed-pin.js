/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually 
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it 
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array 
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 
But please note that all PINs, the observed one and also the results, must be strings, because of 
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/




// function getPINs(observed) {
//   const pinValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', null, '0', null];
//   const observedNums = observed.split(''); // .map(str => Number(str));
//   console.log(observedNums)
//   const result = [observed];
//   for (let i = 0; i < observedNums.length; i += 1) {
//     let curr = observedNums[i];
//     let positionOnKeypad = pinValues.indexOf(curr);
//     console.log(positionOnKeypad)
//     if (pinValues[positionOnKeypad - 1]) {
//       let next = observedNums.map((val, index) => {
//         if (index === i) return pinValues[positionOnKeypad - 1];
//         return val;
//       }).join('');
      
//       result.push(next);
//     }
//     if (pinValues[positionOnKeypad + 1]) {
//       let next = observedNums.map((val, index) => {
//         if (index === i) return pinValues[positionOnKeypad + 1];
//         return val;
//       }).join('');
      
//       result.push(next);
//     }
//     if (pinValues[positionOnKeypad - 3]) {
//       let next = observedNums.map((val, index) => {
//         if (index === i) return pinValues[positionOnKeypad - 3];
//         return val;
//       }).join('');
      
//       result.push(next);
//     }
//     if (pinValues[positionOnKeypad + 3]) {
//       let next = observedNums.map((val, index) => {
//         if (index === i) return pinValues[positionOnKeypad + 3];
//         return val;
//       }).join('');
      
//       result.push(next);
//     }
//   }

//   return result;
// }

// function getPINs(observed, currIndex = 0, result = []) {
//   result.push(observed);
//   console.log('currindex', currIndex, observed.length)
//   if (currIndex === observed.length) return result;
//   const pinValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', null, '0', null];
//   const observedNums = observed.split('');
//   console.log(observedNums)
//   let currNum = observedNums[currIndex];
//   let positionOnKeypad = pinValues.indexOf(currNum);
//   if (pinValues[positionOnKeypad - 1]) {
//     let next = observedNums.map((val, index) => {
//         if (index == currIndex) return pinValues[positionOnKeypad - 1];
//         return val;
//       }).join('');
//       console.log('next', next)
    
//     getPINs(next, currIndex += 1, result);
//   }
//   if (pinValues[positionOnKeypad + 1]) {
//     let next = observedNums.map((val, index) => {
//         if (index == currIndex) return pinValues[positionOnKeypad - 1];
//         return val;
//       }).join('');
    
//     getPINs(next, currIndex += 1, result);
//   }
//   if (pinValues[positionOnKeypad - 3]) {
//     let next = observedNums.map((val, index) => {
//         if (index == currIndex) return pinValues[positionOnKeypad - 1];
//         return val;
//       }).join('');
    
//     getPINs(next, currIndex += 1, result);
//   }
//   if (pinValues[positionOnKeypad + 3]) {
//     let next = observedNums.map((val, index) => {
//         if (index == currIndex) return pinValues[positionOnKeypad - 1];
//         return val;
//       }).join('');
    
//     getPINs(next, currIndex += 1, result);
//   }
// }

function getPINs(observed, currIndex = 0, result = []) {
  // pin values on keypad
  const pinValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', null, '0', null];

  // push each observed value in result
  result.push(observed);

  // if you've reached the end of the input, return the result
  if (currIndex === observed.length) return result;

  // get current Number
  let currNum = observed.split('')[currIndex];
  console.log(currNum)
  // get current position on keypad
  let position = pinValues.indexOf(currNum);
  console.log(position)
  // check for all permutations
  let allPossibleChanges = [pinValues[position - 1], pinValues[position + 1], pinValues[position - 3], pinValues[position + 3]];
  console.log('all', allPossibleChanges)
  let final = [];
  for (let i = 0; i < allPossibleChanges.length; i += 1) {
    if (allPossibleChanges[i]) {
      let next = observed.split('').map((cv, index) => {
        if (index === currIndex) return cv = allPossibleChanges[i];
        return cv;
      }).join('');
      console.log(String(next))
      final.concat(getPINs(String(next), currIndex += 1, result));
    }
  }

//   return final;

// }

// function getPINs(observed) {
  
// }

console.log(getPINs('8'))


module.exports = getPINs