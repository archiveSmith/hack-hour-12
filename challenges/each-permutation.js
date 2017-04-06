/*
Write a function that takes two arguments, an array and a callback. The callback will be called once for each permutation
of the elements of the array, where the permutation is passed as an argument.

Permutations are all the possible rearrangements of the elements. For this problem, assume each permutation must include
every element from the array.

Permutations must NOT repeat any of the array elements.

No return value is necessary.

eachPermutation([1, 2, 3], function(perm) {
  console.log(perm)
});
[ 1, 2, 3 ]
[ 1, 3, 2 ]
[ 2, 1, 3 ]
[ 2, 3, 1 ]
[ 3, 1, 2 ]
[ 3, 2, 1 ]
*/

function eachPermutationOg(arr, callback) {
  const result = [];
  const len = arr.length;

  function perm(items, cur = []) {
    if (cur.length === len) return result.push(cur);

    let item;
    for (let i = 0; i < items.length; i += 1) {
      item = items.splice(i, 1)[0];
      perm(items.slice(), cur.concat(item));
      items.splice(i, 0, item);
    }
  }
  perm(arr);
  result.forEach((e) => callback(e));
}

// eachPermutation([1, 2, 3], function(perm) {
//   console.log(perm)
// });

function eachPermutation(arr, callback, built = [], perms = {}) {
    // If arr is empty, then this particular array is complete. Save in object as key and perform callback.
    // Successive identical arrays will not result in performing the callback.
    if (!arr.length && !(built in perms)) perms[built] = callback(built);

    // Else, give each remaining element a turn being in front of the rest.
    else arr.forEach((e, i) => eachPermutation([...arr.slice(0, i), ...arr.slice(i + 1)], callback, [...built, e], perms));
}

module.exports = eachPermutation;
