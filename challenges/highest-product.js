/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {

  if (!array || array.length < 3) return 0;

  const positiveArr = array.filter(number => {
    return number > 0;
  })  
  const negativeArr = array.filter(number => {
    return number < 0;
  })

  const sortedPosArr = positiveArr.sort((a, b) => { return b-a });
  const sortedNegativeArr = negativeArr.sort((a, b) => {return b-a});

  const minimumPositive = sortedPosArr[sortedPosArr.length - 1] * sortedPosArr[sortedPosArr.length - 2];
  const maxNegative = sortedNegativeArr[sortedNegativeArr.length - 1] * sortedNegativeArr[sortedNegativeArr.length - 2];

  if (sortedPosArr.length > 2) {
    return sortedPosArr[0] * sortedPosArr[1] * sortedPosArr[2];
  }
  else if (sortedPosArr.length === 2) {
    if (sortedNegativeArr.length < 2) {
      return minimumPositive * sortedNegativeArr[0];
    }
    else {
      return sortedPosArr[0] * maxNegative;
    }
  }
  else if (sortedPosArr.length === 1) {
    return sortedPosArr[0] * maxNegative;
  }
  else {
    return sortedNegativeArr[0] * sortedNegativeArr[1] * sortedNegativeArr[2];
  }
}

module.exports = highestProduct;
