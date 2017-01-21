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
  let start = s2.indexOf(s1[0]);
  let newArr = [];
  for(let i = start; i < s2.length; i += 1) {
    newArr.push(s2[i]);
  }
  for(let i = 0; i < start; i += 1) {
    newArr.push(s2[i]);
  }
  return newArr.join('') === s1 ? true : false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
