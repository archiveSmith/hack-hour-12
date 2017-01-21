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

function rotate(string) {
  let rotated = string[string.length - 1];
  for(let i = 0; i < string.length - 1; i++) {
    rotated += string[i];
  }  
  return rotated;
}

function stringRotation(s1, s2) {
  if(s1.length !== s2.length || s1 === undefined || s2 === undefined) {
    return false;
  }
  let counter = s1.length;
  while(counter-- > 0) {
    if(s1 === s2) return true;
    s2 = rotate(s2);
  }
  return false;
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
