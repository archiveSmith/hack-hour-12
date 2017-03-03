/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


// function mergeRanges(array) {
//   return array.reduce((acc, cv) => {
//     if (acc.length === 0) acc.push(cv);
//     else {
//       for (let arr of acc) {
//         if (cv[0] >= arr[0] && cv[1] <= arr[1]) return acc;
//         if (cv[0] <= arr[0] && cv[1] <= arr[1] && cv[1] >= arr[0]) {
//           arr[0] = cv[0];
//           return acc;
//         }
//         if (cv[0] <= arr[0] && cv[1] >= arr[1]) {
//           [arr[0], arr[1]] = [cv[0], cv[1]];
//           return acc;
//         }
//         if (cv[0] >= arr[0] && cv[0] <= arr[1] && cv[1] >= arr[1]) {
//           arr[1] = cv[1];
//           return acc;
//         }
//       }

//       acc.push(cv);
//     }

//     return acc;
//   }, [])
// }

function mergeRanges(array) {
  return array.reduce((acc, cv) => {
    for (let arr of acc) {
      if (cv[0] < arr[0] && cv[1] >= arr[0]) {
        arr[0] = cv[0];
        if (cv[1] >= arr[1]) arr[1] = cv[1];
        return acc;
      }

      if (cv[0] > arr[0] && cv[1] >= arr[1]) {
        arr[1] = cv[1];
        return acc;
      } 
    }
    acc.push(cv);
    return acc;
  }, [])
}

let test = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];
console.log(mergeRanges(test));

module.exports = mergeRanges;
