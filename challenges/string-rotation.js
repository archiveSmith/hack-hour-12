/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
<<<<<<< HEAD
  let arrS1 = s1.split('');
  let comparer = [];

  for (let i = 0; i < arrS1. length; i += 1) {
    arrS1.unshift(arrS1.pop());
    comparer.push(arrS1.join(''))
  }

  return comparer.includes(s2);
=======

>>>>>>> 7fa60a3040e802bd9c81cb87be5c17eb1f91890f
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
