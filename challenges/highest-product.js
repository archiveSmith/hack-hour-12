/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let [highest, lowest] = [Math.max(array[0], array[1]), Math.min(array[0], array[1])];
  let highestProductOf2 = array[0] * array[1];
  let lowestProductOf2 = highestProductOf2;
  let highestProductOf3 = highestProductOf2 * array[2];
  for (let i = 2; i < array.length; i += 1) {
    const current = array[i];
    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );
    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }
  return highestProductOf3;
}

module.exports = highestProduct;
