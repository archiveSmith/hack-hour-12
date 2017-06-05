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


function mergeRanges(array) {
  // create a meetingInProgress timeline
  // plot down areas where ranges exist
  // create new ranges
  const meetingInProgress = [];
  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = array[i][0]; j < array[i][1]; j += 1) {
        meetingInProgress[j] = true;
    }
  }

  let lastMeetingStart;
  for (let i = 0; i < meetingInProgress.length + 1; i += 1) {
    if (meetingInProgress[i] === true && !lastMeetingStart) {
    lastMeetingStart = i;
    }
    if (!meetingInProgress[i] && lastMeetingStart !== undefined) {
    result.push([lastMeetingStart, i]);
    lastMeetingStart = undefined;
    }
  }

  return result;
}

function mergeRangesAlternate(array) {
  array.sort(function(a, b) {
    return a[0] - b[0];
  });
  var result = [array[0]];
  for (var i = 1; i < array.length; i++) {
    var curr = array[i];
    var last = result[result.length - 1];
    if (curr[0] > last[1]) {
      result.push(curr);
    } else if (curr[1] > last[1]) {
      last[1] = curr[1];
    }
  }
  return result;
}

module.exports = mergeRanges;
