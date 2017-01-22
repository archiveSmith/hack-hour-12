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

function stringRotation(s1, s2, startIndex) {
	if(typeof s1 !== 'string' || typeof s2 !== 'string') return;
	if(!startIndex) var startIndex = s2.indexOf(s1[0]);
	s2Morph = s2.slice(startIndex, s2.length).concat(s2.slice(0, startIndex));
	if (s1 === s2Morph) return true
	else {
		var newStartIndex = s2.indexOf(s1[0], startIndex + 1);
		if (newStartIndex === -1) return false;
		return stringRotation(s1, s2, newStartIndex);
	}
}
console.log(stringRotation('hellohello', 'ellohelloh'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

