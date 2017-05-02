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
  if (!s1 || !s2) return;
  if (s1.length !== s2.length) return false;
  let firstIdx = s2.indexOf(s1.charAt(0));
  let firstHalf = s2.slice(0, firstIdx);
  let secondHalf = s2.slice(firstIdx);
  if (secondHalf + firstHalf === s1) {
    return true;
  }
  return false;
}

function CCCstringRotation(s1, s2) {
    // Rotation must be same length and be a subset of the first
    // string concatenated onto itself.
    return s1.length === s2.length && isSubstring(s1.concat(s1), s2);
}

// stringRotation('abcdef','cdefab');
// stringRotation('hello','hello');
// stringRotation('hello','llohe');
// stringRotation('hello','ollhe');

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
