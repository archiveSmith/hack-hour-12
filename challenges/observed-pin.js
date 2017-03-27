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

function getPINs(observed) {
  if (!observed || observed.length <= 0) return {};
  const expectations = {};
  expectations[observed] = [];
  
  function recurse(pin, digit, i, curr) {
    console.log(`${pin}, ${digit}, ${i}, ${curr}`);
    if (curr.length >= pin.length) return expectations[observed].push(curr);

    curr[i] = String(digit);
    digit = Number(pin[i]);
    i += 1;

    // left neighbor;
    if (digit !== 1 && digit !== 4 && digit !== 7 && digit !== 0) recurse(pin, digit - 1, i, curr);
    // right neighbor;
    if (digit !== 3 && digit !== 6 && digit !== 9 && digit !== 0) recurse(pin, digit + 1, i, curr);
    // top neighbor;
    if (digit !== 1 && digit !== 2 && digit !== 3 && digit !== 0) recurse(pin, digit - 3, i, curr);
    // below neighbor;
    if (digit !== 7 && digit !== 9 && digit !== 8 && digit !== 0) recurse(pin, digit + 3, i, curr);
    // special cases for 8 and 0
    if (digit === 8) recurse(pin, 0, i, curr);
    if (digit === 0) recurse(pin, 8, i, curr);

    recurse(pin, digit, i, curr);

  }
  recurse(observed, observed[0], 0, String(observed[0]));

  console.log(expectations);
}

getPINs("45");

module.exports = getPINs