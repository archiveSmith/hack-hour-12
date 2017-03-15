// find longest word made up of other words in the array
// example:
// longest(['cat', 'dog', 'watcher', 'dogwatcher', 'clock']) // => 'dogwatcher'

function longest(array) {
  // sort by longest word first
  // copy array
  // loop through elements in the array
  // check if any elements are in first element
  // if they are remove them from array and first element
  // if first element does not become an empty string recursively call longest
  // on the rest of the array
  // if the array is empty return 'bad input'
  if (!array.length) return 'bad input';
  array = array.sort((a, b) => b.length - a.length);
  const arrCopy = array.slice();

  for (let i = 1; i < arrCopy.length; i += 1) {
    const wordIndex = arrCopy[0].indexOf(arrCopy[i]);
    if (wordIndex !== -1) {
      arrCopy[0] = arrCopy[0].slice(0, wordIndex) + arrCopy[0].slice(wordIndex + arrCopy[i].length);
    }
    if (!arrCopy[0].length) return array[0];
  }
  return longest(array.slice(1));
}
