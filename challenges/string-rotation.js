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
  let fArray = s1.split('');
  let sArray = s2.split('');
  let firstLetter = fArray[0];


 if(fArray.length !== sArray.length) return false;
 if(fArray === sArray) return true;

 let indexes = [],
     matched = false;

 for(let i = 0; i < sArray.length; i++) {
    if (sArray[i] === fArray[0]);
        indexes.push(i);
 }

  indexes.forEach(function(idx) {
      let end = sArray.slice(idx);
      let start = sArray.slice(0,idx);
      let test = end.concat(start);

      if( test.join('') === fArray.join('')) matched = true;

  })

    return matched;

}

console.log(stringRotation('hello','elloh'));


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};
